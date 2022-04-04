<?php

namespace App\Http\Controllers;

use App\Actions\FirebaseUserAuthAction;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\ProjectFile;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Kreait\Firebase\Exception\FirebaseException;
use Kreait\Firebase\Exception\MessagingException;
use Kreait\Firebase\Messaging\AndroidConfig;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Response;
use Str;
use ZipArchive;

class ProjectController extends Controller
{

    /**
     * Show Project
     * @param Project $project
     * @return RedirectResponse|\Inertia\Response
     */
    public function show(Project $project): \Inertia\Response|RedirectResponse
    {
        if (Auth::check()) {
            if ($project->userHasAccess(Auth::user())) {
                return Inertia::render('Project/Show', ['project' => $project, 'owner' => $project->isProjectOwner(Auth::user())]);
            }
            abort(403);
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    /**
     * @param Request $request
     * @return RedirectResponse|\Inertia\Response
     */
    public function store(Request $request): \Inertia\Response|RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $project = Project::create([
            'directory_name' => Str::random(32),
            'name' => $request['name'],
        ]);
        if (Auth::check()) {
            $project->users()->attach(Auth::user(), ['owner' => 1]);
            return Redirect::route('project.show', $project);
        }
        return Inertia::render('Project/Show', ['project' => $project, 'owner' => false]);
    }

    /**
     * Store project + project files
     * @param Request $request
     * @return RedirectResponse
     */
    public function storeFiles(Request $request): RedirectResponse
    {
        $request->validate([
            'file_name' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'file_contents' => 'required|string',
        ]);
        if (!Auth::check()) {
            return Redirect::back()->with('error', 'Couldn\'t save the project, please sign in.');
        }
        $project = Project::create([
            'name' => $request['name'],
        ]);
        $project->users()->attach(Auth::id());
        $dirName = 'projects/' . Str::random(32);
        Storage::makeDirectory($dirName);
        $project->directory_name = $dirName;
        $project->save();


        //todo save project file from monaco / blockly -> files, file_name, file_contents, name

        foreach ($request['files'] as $fileToSave) {
            $fileName = $fileToSave['file_name'];
            $fileContents = $fileToSave['file_contents'];
            $filePath = $dirName . '/' . $fileName;
            if (Storage::exists($filePath)) {
                Storage::delete($filePath);
            }
            if (!Storage::put($filePath, $fileContents)) {
                return Redirect::back()->with('error', 'Couldn\'t save the project. Try again');
            }
            ProjectFile::create([
                'name' => $fileName,
                'project_id' => $project['id'],
                'file_path' => $filePath,
            ]);
        }

        return Redirect::back()->with('success', 'Project was saved');
    }

    /**
     * Update project + project files
     * @param Request $request
     * @param Project $project
     * @param ProjectFile $projectFile
     * @return RedirectResponse
     */
    public function update(Request $request, Project $project, ProjectFile $projectFile): RedirectResponse
    {
        $project->update($request->validate([
            'name' => 'required|string|max:255',
        ]));

        $projectFileNames = $projectFile->getProjectFiles($project['id']);

        foreach ($request['files'] as $fileToSave) {
            $fileName = $fileToSave['file_name'];
            $fileContents = $fileToSave['file_contents'];
            $filePath = $projectFileNames[$fileName]['file_path'];
            if (Storage::exists($filePath)) {
                Storage::delete($filePath);
            }
            if (!Storage::put($filePath, $fileContents)) {
                return Redirect::back()->with('error', 'Couldn\'t save the project. Try again');
            }
            if (!in_array($fileName, $projectFileNames->keys()->toArray(), true)) {
                ProjectFile::create([
                    'name' => $fileName,
                    'project_id' => $project['id'],
                    'file_path' => $filePath,
                ]);
            }
        }
        return Redirect::back()->with('success', 'Project was saved');
    }

    public function destroy(Project $project): RedirectResponse
    {
        if (Auth::check()) {
            if (Auth::id() === $project->getProjectOwner()['id']) {
                File::deleteDirectory(Storage::path('projects' . DIRECTORY_SEPARATOR . $project['directory_name']));
                $project->files()->delete();
                $project->users()->detach();
                $project->delete();
                return Redirect::back()->with('success', 'Project was deleted');
            }
            return Redirect::back()->with('error', 'Can not delete, you are not project owner.');
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    /**
     * Get all projects of current user
     * @return \Inertia\Response|RedirectResponse
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        if (Auth::check()) {
            $user = Auth::user();
            return Inertia::render('Project/Index', ['projects' => ProjectResource::collection($user['projects'])]);
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    /**
     * Shares project to another user -> email required
     * @param Request $request
     * @param Project $project
     * @return RedirectResponse
     */
    public function projectShare(Request $request, Project $project): RedirectResponse
    {
        if (Auth::check()) {
            $request->validate([
                'email' => 'required|email|exists:users,email',
            ]);
            $owner = $project->users()->wherePivot('owner', 1)->first();
            if ($owner['id'] === Auth::id()) {
                $user = User::where('email', $request['email'])->first();
                $project->users()->syncWithoutDetaching($user['id']);
                return Redirect::back()->with('success', 'Project was shared.');
            }
            return Redirect::back()->with('error', 'Can\'t share project, you are not the owner.');
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    /**
     * For Android -> returns all projects of Firebase user
     * @param Request $request
     * @param FirebaseUserAuthAction $firebaseUserAuthAction
     * @param Project $project
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getFirebaseUserProjects(Request $request, FirebaseUserAuthAction $firebaseUserAuthAction, Project $project): JsonResponse|AnonymousResourceCollection
    {
        $user = $firebaseUserAuthAction->execute($request['id_token']);
        if (array_key_exists('error', $user)) {
            return Response::json(['errors' => ['error' => $user['error']]]);
        }
        return ProjectResource::collection($project->getProjectsByUser($user['id']));
    }

    /**
     * For Android -> returns .love file for project
     * @param Request $request
     * @param FirebaseUserAuthAction $firebaseUserAuthAction
     * @return JsonResponse
     */
    public function getProjectsLoveFile(Request $request, FirebaseUserAuthAction $firebaseUserAuthAction): JsonResponse
    {
        $user = $firebaseUserAuthAction->execute($request['id_token']);
        if (array_key_exists('error', $user)) {
            return Response::json(['errors' => ['error' => $user['error']]]);
        }
        $project = Project::find($request['id']);
        $outputDirName = 'download' . DIRECTORY_SEPARATOR . $project['directory_name'];
        Storage::disk('public')->makeDirectory($outputDirName);
        $outputFilePath = $outputDirName . DIRECTORY_SEPARATOR . 'project.love';

        if ($this->createLoveFile($project['directory_name'], $outputFilePath) && Storage::disk('public')->exists($outputFilePath)) {
            return Response::json(['url' => Storage::disk('public')->url($outputFilePath), 'name' => $project['name'] . '.love']);
        }
        return Response::json(['errors' => ['error' => 'Could not download project']]);
    }

    /**
     * Create .love file from project
     * @param $projectDirectory
     * @param $outputFilePath
     * @return bool
     */
    private function createLoveFile($projectDirectory, $outputFilePath): bool
    {
        $zip = new ZipArchive();
        $tempFile = tmpfile();
        $tempFileUri = stream_get_meta_data($tempFile)['uri'] . '.zip';
        $fullFilePath = Storage::disk('public')->path($outputFilePath);

        if ($zip->open($tempFileUri, ZipArchive::CREATE) !== TRUE) {
            return false;
        }

        $files = File::files(Storage::path('projects' . DIRECTORY_SEPARATOR . $projectDirectory));
        foreach ($files as $value) {
            if (!$zip->addFile($value->getPathname(), $value->getBasename())) {
                return false;
            }
        }
        $zip->close();
        File::move($tempFileUri, $fullFilePath);
        return true;
    }

    /**
     * Sends FCM to Android app
     * @param Project $project
     * @return RedirectResponse
     */
    public function sendMessageToAndroid(Project $project): RedirectResponse
    {
        $user = $project->users()->wherePivot('owner', 1)->first();
        if ($user['FCM_token'] === null) {
            return Redirect::route('project.show', $project)->with('error', 'Can not find android device. Did you downloaded Love Block application?');
        }
        $messaging = Firebase::messaging();

        try {
            $result = $messaging->validateRegistrationTokens($user['FCM_token']);
            if ($result['valid'][0] !== $user['FCM_token']) {
                return Redirect::route('project.show', $project)->with('error', 'Can not not find valid token. Press refresh token in your application');
            }
            $config = AndroidConfig::new()->withHighPriority();

            $outputDirName = 'download' . DIRECTORY_SEPARATOR . $project['directory_name'];
            Storage::disk('public')->makeDirectory($outputDirName);
            $outputFilePath = $outputDirName . DIRECTORY_SEPARATOR . 'project.love';

            if (!$this->createLoveFile($project['directory_name'], $outputFilePath) && Storage::disk('public')->exists($outputFilePath)) {
                return Redirect::route('project.show', $project)->with('error', 'Something went wrong, can not send message to Android, try again later.');
            }
            $message = CloudMessage::withTarget('token', $user['FCM_token'])
                ->withAndroidConfig($config)
                ->withNotification(Notification::create('New Msg', date('H:i:s')))
                ->withData(['url' => Storage::disk('public')->url($outputFilePath), 'name' => $project['name'] . '.love']);
            $messaging->send($message);
        } catch (MessagingException|FirebaseException) {
            return Redirect::route('project.show', $project)->with('error', 'Can not not find valid token. Press refresh token in your application');
        }
        return Redirect::route('project.show', $project)->with('success', 'Open your android device');
    }

//    public function testDownload()
//    {
//        $file_path = 'x.jpg';
//        try {
//            if (Storage::exists($file_path)) {
//                Storage::setVisibility($file_path, 'public');
//
//                $file = Storage::get($file_path);
//                $path = Storage::path($file_path);
//                $url = Storage::url($file_path);
//                $visibility = Storage::getVisibility($file_path);
//                $allFiles = Storage::allFiles('/');
////                ddd($allFiles);
//
////                 return Response::json([
////                     'url' => $url,
////                     'name' => $file_path,
////                 ]);
//                $headers = ['Content-Type: image/jpg'];
//                return Response::download($path, 'x.jpg', $headers);
//            }
//            return Response::json(['errors' => ['error' => 'Project doesn\'t exist']]);
//        } catch (FileNotFoundException $e) {
//            return Response::json(['errors' => ['error' => 'Could not download project']]);
//        }
//    }

//    public function projectFile(Request $request): JsonResponse
//    {
//        $file_path = 'x.jpg';
//        try {
//            if (Storage::exists($file_path)) {
//                Storage::setVisibility($file_path, 'public');
//
//                $file = Storage::get($file_path);
//                $path = Storage::path($file_path);
//                $url = Storage::url($file_path);
//                $visibility = Storage::getVisibility($file_path);
//                $allFiles = Storage::allFiles('/');
////                ddd($allFiles);
//
//                return Response::json([
//                    'url' => $url,
//                    'name' => $file_path,
//                ]);
////                 $headers = ['Content-Type: image/jpg'];
////                 return Response::download($path, 'x.jpg', $headers);
//            }
//            return Response::json(['errors' => ['error' => 'Project doesn\'t exist']]);
//        } catch (FileNotFoundException $e) {
//            return Response::json(['errors' => ['error' => 'Could not download project']]);
//        }
//    }
}

<?php

namespace App\Http\Controllers;

use App\Actions\FirebaseUserAuthAction;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\ProjectFile;
use App\Models\User;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
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

class ProjectController extends Controller
{

    /**
     * Show Project
     * @param Project $project
     * @return \Inertia\Response
     */
    public function show(Project $project): \Inertia\Response
    {
        return Inertia::render('Project/Show', ['project' => $project]);
    }

    /**
     * Store project + project files
     * @param Request $request
     * @param User $user
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
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

    /**
     * Get all projects of current user
     * @return AnonymousResourceCollection|RedirectResponse
     */
    public function getUserProjects(): AnonymousResourceCollection|RedirectResponse
    {
        if (Auth::check()) {
            $user = Auth::user();
            return ProjectResource::collection($user->projects);
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
                $project->users()->attach($user['id']);
                return Redirect::back()->with('success', 'Project was shared.');
            }
            return Redirect::back()->with('warning', 'Can\'t share project, you are not the owner.');
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    public function projectFile(Request $request): JsonResponse
    {
        //todo find project by ID -> find files -> download files
        $file_path = 'x.jpg';
        try {
            if (Storage::exists($file_path)) {
                Storage::setVisibility($file_path, 'public');

                $file = Storage::get($file_path);
                $path = Storage::path($file_path);
                $url = Storage::url($file_path);
                $visibility = Storage::getVisibility($file_path);
                $allFiles = Storage::allFiles('/');
//                ddd($allFiles);

                return Response::json([
                    'url' => $url,
                    'name' => $file_path,
                ]);
//                 $headers = ['Content-Type: image/jpg'];
//                 return Response::download($path, 'x.jpg', $headers);
            }
            return Response::json(['errors' => ['error' => 'Project doesn\'t exist']]);
        } catch (FileNotFoundException $e) {
            return Response::json(['errors' => ['error' => 'Could not download project']]);
        }
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
     * @param Project $project
     * @return JsonResponse
     */
    public function getProjectFile(Request $request, FirebaseUserAuthAction $firebaseUserAuthAction, Project $project): JsonResponse
    {
        $user = $firebaseUserAuthAction->execute($request['id_token']);
        if (array_key_exists('error', $user)) {
            return Response::json(['errors' => ['error' => $user['error']]]);
        }
        $projectFiles = Project::find($request['id'])->project_files;
        //todo make .love file

        //todo return .love file for download
        return Response::json(['file' => 'https://XXX']);
    }

//    public function getProjectAPK(Request $request, FirebaseUserAuthAction $firebaseUserAuthAction, Project $project): JsonResponse
//    {
//        $user = $firebaseUserAuthAction->execute($request['id_token']);
//        if (array_key_exists('error', $user)) {
//            return Response::json(['errors' => ['error' => $user['error']]]);
//        }
//        $projectFiles = Project::find($request['id'])->project_files;
//        //todo make APK from project files
//
//        //todo return APK for download
//        return Response::json(['apk' => 'https://APK../']);
//    }

    /**
     * Sends FCM to Android app
     * @param Project $project
     * @return RedirectResponse
     */
    public function sendMessageToAndroid(Project $project): RedirectResponse
    {
        $user = $project->users()->wherePivot('owner', 1)->first();
        if ($user['FCM_token'] === null) {
            return Redirect::route('project.show', $project)->with('error', 'Can not fond android device');
        }
        $messaging = Firebase::messaging();

        try {
            $result = $messaging->validateRegistrationTokens($user['FCM_token']);
            if ($result['valid'][0] !== $user['FCM_token']) {
                return Redirect::route('project.show', $project)->with('error', 'Can not not find valid token. Press refresh token in your application');
            }
            $config = AndroidConfig::new()->withHighPriority();

            //todo make APK
            //todo make .love File

            $message = CloudMessage::withTarget('token', $user['FCM_token'])
                ->withAndroidConfig($config)
                ->withData(['apk' => '', 'file' => '']);

            $messaging->send($message);
        } catch (MessagingException|FirebaseException $e) {
            return Redirect::route('project.show', $project)->with('error', 'Can not not find valid token. Press refresh token in your application');
        }
        return Redirect::route('project.show', $project)->with('success', 'Open you\'r android device');
    }

    public function testDownload()
    {
        //todo find project by ID -> find files -> download files
        $file_path = 'x.jpg';
        try {
            if (Storage::exists($file_path)) {
                Storage::setVisibility($file_path, 'public');

                $file = Storage::get($file_path);
                $path = Storage::path($file_path);
                $url = Storage::url($file_path);
                $visibility = Storage::getVisibility($file_path);
                $allFiles = Storage::allFiles('/');
//                ddd($allFiles);

//                 return Response::json([
//                     'url' => $url,
//                     'name' => $file_path,
//                 ]);
                $headers = ['Content-Type: image/jpg'];
                return Response::download($path, 'x.jpg', $headers);
            }
            return Response::json(['errors' => ['error' => 'Project doesn\'t exist']]);
        } catch (FileNotFoundException $e) {
            return Response::json(['errors' => ['error' => 'Could not download project']]);
        }
    }
}

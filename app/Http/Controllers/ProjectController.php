<?php

namespace App\Http\Controllers;

use App\Actions\CreateLoveFileAction;
use App\Actions\FirebaseUserAuthAction;
use App\Actions\RefreshGameAction;
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
                try {
                    $conf = Storage::disk('local')->get('projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'conf.lua');
                } catch (FileNotFoundException $e) {
                    $conf = null;
                }
                return Inertia::render('Project/Show', [
                    'project' => $project,
                    'owner' => $project->isProjectOwner(Auth::user()),
                    'config' => $conf,
                    'main' => static fn() => $project->getMainLua(),
                    'gamePackage' => Inertia::lazy(static fn() => RefreshGameAction::execute($project)),
                ]);
            }
            abort(403);
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    /**
     * Stores Project to DB
     * @param Request $request
     * @return RedirectResponse|\Inertia\Response
     * @throws \JsonException
     */
    public function store(Request $request): \Inertia\Response|RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $project = Project::create([
            'directory_name' => Str::random(32),
            'name' => $request['name'],
            'blockly_workspace' => json_decode('{}', false, 512, JSON_THROW_ON_ERROR),
            'monaco_workspace' => json_decode('{}', false, 512, JSON_THROW_ON_ERROR),
        ]);
        if (Auth::check()) {
            $project->users()->attach(Auth::user(), ['owner' => 1]);
            Storage::disk('local')->makeDirectory('projects' . DIRECTORY_SEPARATOR . $project['directory_name']);
            $mainPath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'main.lua';
            $confPath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'conf.lua';
            Storage::disk('local')->put($mainPath, '');
            Storage::disk('local')->put($confPath, ''); //todo add basic conf
            ProjectFile::create(['name' => 'main.lua', 'project_id' => $project['id'], 'file_path' => $mainPath]);
            ProjectFile::create(['name' => 'conf.lua', 'project_id' => $project['id'], 'file_path' => $confPath]);
            return Redirect::route('project.show', $project);
        }
        return Inertia::render('Project/Show', ['project' => $project, 'owner' => false]);
    }

    /**
     * Update project + project files
     * @param Request $request
     * @param Project $project
     * @return RedirectResponse
     */
    public function update(Request $request, Project $project): RedirectResponse
    {
        if (!Auth::check()) {
            return Redirect::back()->with('error', 'Couldn\'t save the project, please sign in.');
        }
        $request->validate([
            'main' => 'required',
            'editor' => 'required|boolean',
        ]);

        $project->update(['editor' => $request['editor']]);
        if ($request['blockly_workspace'] !== null) {
            $project->update(['blockly_workspace' => $request['blockly_workspace']]);
            $project->save();
        } else if ($request['monaco_workspace'] !== null) {
            $project->update(['monaco_workspace' => $request['monaco_workspace']]);
            $project->save();
        }

        $mainPath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'main.lua';
        if (!$this->storeFiles($project, $mainPath, 'main.lua', $request['main'])) {
            return Redirect::back()->with('error', 'Could not save project try again');
        }

        if ($request['config'] !== null) {
            $confPath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'conf.lua';
            if (!$this->storeFiles($project, $confPath, 'config.lua', $request['config'])) {
                return Redirect::back()->with('error', 'Could not save project try again');
            }
        }

        return Redirect::back()->with('success', 'Project was saved');
    }

    /**
     * Store project + project files
     * @param Project $project
     * @param $filePath
     * @param $fileName
     * @param $fileContents
     * @return bool
     */
    private function storeFiles(Project $project, $filePath, $fileName, $fileContents): bool
    {
        if (Storage::disk('local')->exists($filePath)) {
            Storage::disk('local')->delete($filePath);
        }
        if (Storage::disk('local')->put($filePath, $fileContents)) {
            ProjectFile::create([
                'name' => $fileName,
                'project_id' => $project['id'],
                'file_path' => $filePath,
            ]);
            return true;
        }
        return false;
    }

    /**
     * Save config file
     * @param Request $request
     * @param Project $project
     * @return RedirectResponse
     */
    public function updateConfig(Request $request, Project $project): RedirectResponse
    {
        if (!Auth::check()) {
            return Redirect::back()->with('error', 'Couldn\'t save the project, please sign in.');
        }
        $request->validate([
            'config' => 'required',
        ]);

        $confPath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'conf.lua';
        if (!$this->storeFiles($project, $confPath, 'config.lua', $request['config'])) {
            return Redirect::back()->with('error', 'Could not save project try again');
        }
        return Redirect::back()->with('success', 'Config was saved');
    }

    /**
     * Destroy Project
     * @param Project $project
     * @return RedirectResponse
     */
    public function destroy(Project $project): RedirectResponse
    {
        if (Auth::check()) {
            if (Auth::id() === $project->getProjectOwner()['id']) {
                File::deleteDirectory(Storage::path('projects' . DIRECTORY_SEPARATOR . $project['directory_name']));
                if (Storage::disk('public')->exists('download' . DIRECTORY_SEPARATOR . $project['directory_name'])) {
                    File::deleteDirectory(Storage::disk('public')->path('download' . DIRECTORY_SEPARATOR . $project['directory_name']));
                }
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
     * Copy project
     * @param Project $project
     * @return RedirectResponse
     */
    public function copy(Project $project): RedirectResponse
    {
        try {
            $oldMainContents = Storage::disk('local')->get('projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'main.lua');
            $oldConfContents = Storage::disk('local')->get('projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'conf.lua');
        } catch (FileNotFoundException $e) {
            return Redirect::back()->with('error', 'Something went wrong can\'t copy project');
        }
        $projectCopy = Project::create([
            'directory_name' => Str::random(32),
            'blockly_workspace' => $project['blockly_workspace'],
            'name' => $project['name'] . ' copy',
        ]);

        $projectCopy->users()->attach(Auth::user(), ['owner' => 1]);
        Storage::disk('local')->makeDirectory('projects' . DIRECTORY_SEPARATOR . $projectCopy['directory_name']);
        $copyMainPath = 'projects' . DIRECTORY_SEPARATOR . $projectCopy['directory_name'] . DIRECTORY_SEPARATOR . 'main.lua';
        $copyConfPath = 'projects' . DIRECTORY_SEPARATOR . $projectCopy['directory_name'] . DIRECTORY_SEPARATOR . 'conf.lua';
        Storage::disk('local')->put($copyMainPath, $oldMainContents);
        Storage::disk('local')->put($copyConfPath, $oldConfContents);
        ProjectFile::create(['name' => 'main.lua', 'project_id' => $projectCopy['id'], 'file_path' => $copyMainPath]);
        ProjectFile::create(['name' => 'conf.lua', 'project_id' => $projectCopy['id'], 'file_path' => $copyConfPath]);
        return Redirect::route('project.show', $projectCopy);
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
        $path = $outputDirName . DIRECTORY_SEPARATOR . 'project.love';

        do {
            File::delete(Storage::disk('public')->path($path));
        } while (Storage::disk('public')->exists($path));

        if (CreateLoveFileAction::execute($project['directory_name'], Storage::disk('public')->path($path))) {
            if (Storage::disk('public')->exists($path)) {
                return Response::json(['url' => Storage::disk('public')->url($path), 'name' => $project['name'] . '.love']);
            }
            return Response::json(['errors' => ['error' => 'Could not download project']]);
        }
        return Response::json(['errors' => ['error' => 'Could not download project']]);
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
            $path = $outputDirName . DIRECTORY_SEPARATOR . 'project.love';

            do {
                File::delete(Storage::disk('public')->path($path));
            } while (Storage::disk('public')->exists($path));

            if (CreateLoveFileAction::execute($project['directory_name'], Storage::disk('public')->path($path))) {
                if (Storage::disk('public')->exists($path)) {
                    $message = CloudMessage::withTarget('token', $user['FCM_token'])
                        ->withAndroidConfig($config)
                        ->withNotification(Notification::create('Open project', $project['name']))
                        ->withData(['url' => Storage::disk('public')->url($path), 'name' => $project['name'] . '.love']);
                    $messaging->send($message);
                    return Redirect::route('project.show', $project)->with('success', 'Open your android device');
                }
                return Redirect::route('project.show', $project)->with('error', 'Something went wrong, can not send message to Android, try again later.');
            }
            return Redirect::route('project.show', $project)->with('error', 'Something went wrong, can not send message to Android, try again later.');
        } catch (MessagingException|FirebaseException) {
            return Redirect::route('project.show', $project)->with('error', 'Can not not find valid token. Press refresh token in your application');
        }
    }
}

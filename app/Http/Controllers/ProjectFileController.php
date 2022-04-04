<?php

namespace App\Http\Controllers;

use App\Http\Resources\FileResource;
use App\Models\Project;
use App\Models\ProjectFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProjectFileController extends Controller
{
    /**
     * List all project files
     * @param Project $project
     * @return Response|RedirectResponse
     */
    public function index(Project $project): Response|RedirectResponse
    {
        if (Auth::check()) {
            if ($project->userHasAccess(Auth::user())) {
                return Inertia::render('Project/Files/Index', ['files' => FileResource::collection($project['files']), 'projectName' => $project['name']]);
            }
            abort(403);
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }

    /**
     * Delete file
     * @param ProjectFile $projectFile
     * @return RedirectResponse
     */
    public function destroy(ProjectFile $projectFile): RedirectResponse
    {
        if (Auth::check()) {
            $project = Project::findOrFail($projectFile['project_id']);
            if ($project->userHasAccess(Auth::user())) {
                File::delete(Storage::path('projects' . DIRECTORY_SEPARATOR . $projectFile['file_path']));
                $projectFile->delete();
                return Redirect::back()->with('success', 'File was deleted');
            }
            return Redirect::back()->with('error', 'Can not delete, you don\'t have access.');
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }
}

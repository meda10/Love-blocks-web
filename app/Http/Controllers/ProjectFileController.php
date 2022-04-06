<?php

namespace App\Http\Controllers;

use App\Http\Resources\FileResource;
use App\Models\Project;
use App\Models\ProjectFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
                return Inertia::render('Project/Files/Index', ['files' => FileResource::collection($project['files']), 'project' => $project]);
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

    /**
     * @param Project $project
     * @param Request $request
     * @return RedirectResponse
     */
    public function uploadFile(Project $project, Request $request): RedirectResponse
    {
        $request->validate([
            'file' => 'required|file',
        ]);

        if (Auth::check()) {
            $file = $request->file('file');
            $filePath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'resources';
            if (Storage::disk('local')->putFileAs($filePath, $file, $file->getClientOriginalName())) {
                ProjectFile::create([
                    'name' => $file->getClientOriginalName(),
                    'project_id' => $project['id'],
                    'file_path' => $filePath,
                ]);
                return Redirect::back()->with('success', 'File was uploaded');
            }
            return Redirect::back()->with('error', 'can not save...');
        }
        return Redirect::back()->with('error', 'Please sign in.');
    }
}

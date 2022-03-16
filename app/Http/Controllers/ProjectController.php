<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Response;

class ProjectController extends Controller
{


    public function project(Request $request): JsonResponse
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

                return response()->json([
                    'url' => $url,
                    'name' => $file_path,
                ]);
//                 $headers = ['Content-Type: image/jpg'];
//                 return Response::download($path, 'x.jpg', $headers);
            }
            return response()->json(['errors' => ['error' => 'Project doesn\'t exist']]);
        } catch (FileNotFoundException $e) {
            return response()->json(['errors' => ['error' => 'Could not download project']]);
        }
    }

    public function getUserProjects($id)
    {
        return ProjectResource::collection((new Project)->getProjectsByUser($id));
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

//                 return response()->json([
//                     'url' => $url,
//                     'name' => $file_path,
//                 ]);
                $headers = ['Content-Type: image/jpg'];
                return Response::download($path, 'x.jpg', $headers);
            }
            return response()->json(['errors' => ['error' => 'Project doesn\'t exist']]);
        } catch (FileNotFoundException $e) {
            return response()->json(['errors' => ['error' => 'Could not download project']]);
        }
    }
}

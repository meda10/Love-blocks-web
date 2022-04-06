<?php

namespace App\Actions;

use ErrorException;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class CreateLoveFileAction
{
    /**
     * Create .love file from project and save to output directory
     * @param $projectDirectory
     * @param $outputFilePath
     * @return bool
     */
    public static function execute($projectDirectory, $outputFilePath): bool
    {
        $zip = new ZipArchive();
        $tempFile = tmpfile();
        $tempFileUri = stream_get_meta_data($tempFile)['uri'] . '.zip';

        if ($zip->open($tempFileUri, ZipArchive::CREATE) !== TRUE) {
            return false;
        }

        $filesPath = 'projects' . DIRECTORY_SEPARATOR . $projectDirectory;
        if (Storage::exists($filesPath)) {
            $files = File::files(Storage::path($filesPath));
            foreach ($files as $value) {
                if (!$zip->addFile($value->getPathname(), $value->getBasename())) {
                    return false;
                }
            }
        }

        $resourcesPath = 'projects' . DIRECTORY_SEPARATOR . $projectDirectory . DIRECTORY_SEPARATOR . 'resources';
        if (Storage::exists($resourcesPath)) {
            $resources = File::files(Storage::path($resourcesPath));
            $zip->addEmptyDir('resources');
            foreach ($resources as $value) {
                if (!$zip->addFile($value->getPathname(), 'resources' . DIRECTORY_SEPARATOR . $value->getBasename())) {
                    return false;
                }
            }
        }

        if (!$zip->close()) {
            return false;
        }

        try {
            File::move($tempFileUri, $outputFilePath);
        } catch (ErrorException) {
            return false;
        }
        return true;
    }
}

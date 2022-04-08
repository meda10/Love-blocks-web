<?php

namespace App\Actions;

use App\Models\Project;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\RedirectResponse;
use Exception;
use Illuminate\Support\Str;
use JsonException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class RefreshGameAction
{

    /**
     * Refresh game shown in browser
     * @param Project $project
     * @return mixed|null
     * @throws FileNotFoundException
     */
    public static function execute(Project $project): mixed
    {
        if (Auth::check()) {
            $directoryPath = 'projects' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'games' . DIRECTORY_SEPARATOR . Auth::id() . DIRECTORY_SEPARATOR;
            $publicDirectoryPath = 'download' . DIRECTORY_SEPARATOR . $project['directory_name'] . DIRECTORY_SEPARATOR . 'games' . DIRECTORY_SEPARATOR . Auth::id() . DIRECTORY_SEPARATOR;
            Storage::disk('local')->makeDirectory($directoryPath);
            $loveFile = $directoryPath . 'project.love';
            $loveFilePath = Storage::disk('local')->path($loveFile);
            $outputFilePath = Storage::disk('public')->path($publicDirectoryPath);
            if (!CreateLoveFileAction::execute($project['directory_name'], $loveFilePath) || !Storage::disk('local')->exists($loveFile)) {
                return null;
            }
            try {
                $command = ['npx', 'love.js', '-t', 'title', '-c', $loveFilePath, $outputFilePath];
                ExecuteShellCommandAction::execute($command);
            } catch (Exception $e) {
                return null;
            }
            $package = Str::of(Storage::disk('public')->get($publicDirectoryPath . 'game.js'))->match('/loadPackage\({".*}/');
            try {
                $json = json_decode($package->remove('loadPackage('), false, 512, JSON_THROW_ON_ERROR);
                Storage::disk('public')->delete([$publicDirectoryPath . 'love.js', $publicDirectoryPath . 'game.js', $publicDirectoryPath . 'index.html']);
                Storage::disk('public')->deleteDirectory($publicDirectoryPath . 'theme');
                return $json;
            } catch (JsonException $e) {
                return null;
            }
        }
        return null;
    }
}

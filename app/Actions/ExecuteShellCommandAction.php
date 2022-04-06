<?php

namespace App\Actions;

use Exception;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class ExecuteShellCommandAction
{
    /**
     * @source https://dev.to/kodeas/executing-shell-commands-in-laravel-1098
     * @throws Exception
     */
    public static function execute($cmd): string
    {
        $process = new Process($cmd);

        $process->setTimeout(null)->run();

        if (!$process->isSuccessful() && $process->getExitCode()) {
            $exception = new ProcessFailedException($process);
            report($exception);
            throw $exception;
        }
        return $process->getOutput();
    }
}

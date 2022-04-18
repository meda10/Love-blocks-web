<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectFileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', static function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => 'auth'], static function () {

    Route::get('/administration', static fn() => Inertia::render('dashboard'))->name('administration')->middleware('permission:administration');
    Route::get('/administration/users', [UserController::class, 'index'])->name('user.index')->middleware('permission:show users');
    Route::get('/administration/user/create', [UserController::class, 'create'])->name('user.create')->middleware('permission:create users');
    Route::post('/administration/users', [UserController::class, 'store'])->name('user.store')->middleware('permission:create users');
    Route::get('/administration/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit')->middleware('permission:edit users');
    Route::patch('/administration/user/{user}', [UserController::class, 'update'])->name('user.update')->middleware('permission:edit users');
    Route::delete('/administration/user/{user}', [UserController::class, 'destroy'])->name('user.destroy')->middleware('permission:remove users');
    Route::put('/administration/user/{user}/restore', [UserController::class, 'restore'])->name('user.restore')->middleware('permission:remove users');

    Route::get('/profile', static fn() => Inertia::render('Profile/Show'))->name('profile');
    //Route::get('/index', static fn() => Inertia::render('API/Index'))->name('index');

    Route::get('/user/projects', [ProjectController::class, 'index'])->name('project.user');
    Route::get('/project/{project}/download', [ProjectController::class, 'sendMessageToAndroid'])->name('project.download');
});

Route::get('/home', static fn() => Inertia::render('Home'))->name('home');

Route::get('/project/host-project', static fn() => Inertia::render('Project/Host'))->name('project.host');
Route::post('/project/create', [ProjectController::class, 'store'])->name('project.create');
Route::get('/project/{project}', [ProjectController::class, 'show'])->name('project.show');
Route::delete('/project/{project}', [ProjectController::class, 'destroy'])->name('project.destroy');
Route::post('/project/{project}/update', [ProjectController::class, 'update'])->name('project.update');
Route::post('/project/{project}/share', [ProjectController::class, 'projectShare'])->name('project.share');
Route::get('/project/{project}/copy', [ProjectController::class, 'copy'])->name('project.copy');
Route::post('/project/{project}/config', [ProjectController::class, 'updateConfig'])->name('project.config');

Route::post('/project/{project}/upload', [ProjectFileController::class, 'uploadFile'])->name('file.upload');
Route::get('/project/{project}/files', [ProjectFileController::class, 'index'])->name('project.files');
Route::delete('/file/{projectFile}', [ProjectFileController::class, 'destroy'])->name('file.destroy');

Route::get('/download/love/blocks', static function () {
    return Storage::disk('public')->download('download' . DIRECTORY_SEPARATOR . 'loveBlocks' . DIRECTORY_SEPARATOR . 'loveBlocks.apk');
})->name('apk.download');

Route::get('/storage/{file}', static function ($file) {
    return Storage::disk('public')->download($file);
});

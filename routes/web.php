<?php

use App\Http\Controllers\ProjectController;
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

    Route::get('/home', static fn() => Inertia::render('Home'))->name('home');
    Route::get('/blocks', static fn() => Inertia::render('Blockly'))->name('blocks');
    Route::get('/profile', static fn() => Inertia::render('Profile/Show'))->name('profile');
    Route::get('/index', static fn() => Inertia::render('API/Index'))->name('index');

    Route::get('/user/projects', [ProjectController::class, 'index'])->name('project.user');
    Route::get('/project/{project}/download', [ProjectController::class, 'sendMessageToAndroid'])->name('project.download');
});


Route::get('/administration', static fn() => Inertia::render('dashboard'))->name('administration');
Route::get('/administration/users', [UserController::class, 'index'])->name('user.index');
Route::get('/administration/user/create', [UserController::class, 'create'])->name('user.create');
Route::post('/administration/users', [UserController::class, 'store'])->name('user.store');
Route::get('/administration/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
Route::patch('/administration/user/{user}', [UserController::class, 'update'])->name('user.update');
Route::delete('/administration/user/{user}', [UserController::class, 'destroy'])->name('user.destroy');
Route::put('/administration/user/{user}/restore', [UserController::class, 'restore'])->name('user.restore');

Route::post('/project/create', [ProjectController::class, 'store'])->name('project.create');
Route::get('/project/{project}', [ProjectController::class, 'show'])->name('project.show');
Route::delete('/project/{project}', [ProjectController::class, 'destroy'])->name('project.destroy');
Route::get('/project/{project}/update', [ProjectController::class, 'update'])->name('project.update');
Route::post('/project/{project}/share', [ProjectController::class, 'projectShare'])->name('project.share');

Route::get('/editor', static fn() => Inertia::render('Editor'))->name('editor');


Route::get('storage/{file}', static function ($file) {
//    $path = storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $file);
//    $path = Storage::url($file);
//    return Response::file($path);
    return Storage::disk('public')->download($file);
});

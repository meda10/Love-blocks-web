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

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => 'auth'], function () {

    Route::get('/home', function () {
        return Inertia::render('Home');
    })->name('home');
    Route::get('/blocks', function () {
        return Inertia::render('Blockly');
    })->name('blocks');
    Route::get('/profile', function () {
        return Inertia::render('Profile/Show');
    })->name('profile');
    Route::get('/index', function () {
        return Inertia::render('API/Index');
    })->name('index');

});
Route::get('/administration', function () {
    return Inertia::render('dashboard');
})->name('administration');

Route::get('/administration/users', [UserController::class, 'index'])->name('user.index');
Route::get('/administration/user/create', [UserController::class, 'create'])->name('user.create');
Route::post('/administration/users', [UserController::class, 'store'])->name('user.store');
Route::get('/administration/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
Route::patch('/administration/user/{user}', [UserController::class, 'update'])->name('user.update');
Route::delete('/administration/user/{user}', [UserController::class, 'destroy'])->name('user.destroy');
Route::put('/administration/user/{user}/restore', [UserController::class, 'restore'])->name('user.restore');


Route::get('/download', [ProjectController::class, 'testDownload'])->name('download');
Route::get('/editor', function () {
    return Inertia::render('Editor');
})->name('editor');


//Route::get('storage/{file}', function ($file) {
//    $path = storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $file);
//$path = Storage::url($file);
//    return response()->file($path);
//});

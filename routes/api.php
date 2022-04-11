<?php

use App\Http\Controllers\FirebaseLoginController;
use App\Http\Controllers\ProjectController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:sanctum']], static function ($route) {
    $route->get('/user', function (Request $request) {
        return $request->user();
    });
    $route->post('/logout', function (Request $request) {
        return $request->user()->currentAccessToken()->delete();
    });
});

Route::post('/login', [FirebaseLoginController::class, 'loginAndroidUser'])->name('firebase.login');
Route::post('/register', [FirebaseLoginController::class, 'registerAndroidUser'])->name('firebase.register');
Route::post('/token', [FirebaseLoginController::class, 'refreshFCMToken'])->name('firebase.token');
Route::post('/projects', [ProjectController::class, 'getFirebaseUserProjects'])->name('api.project.user');
Route::post('/project/love', [ProjectController::class, 'getProjectsLoveFile'])->name('api.project.love');

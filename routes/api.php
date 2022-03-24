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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/book', static function (Request $request) {
    return response()->json(['Message' => 'Hello']);
});

Route::post('/login', [FirebaseLoginController::class, 'login'])->name('firebase.login');
Route::post('/register', [FirebaseLoginController::class, 'register'])->name('firebase.register');
Route::post('/token', [FirebaseLoginController::class, 'token'])->name('firebase.token');
Route::post('/file', [ProjectController::class, 'projectFile'])->name('project.file');
Route::post('/projects', [ProjectController::class, 'getUserProjects'])->name('project.user');
Route::post('/apk', [ProjectController::class, 'getProjectAPK'])->name('project.apk');

//Route::post('/login', function (Request $request) {
//    $validator = Validator::make($request->all(), [
//        'email' => 'required|email',
//        'password' => 'required',
//        'device_name' => 'required',
//    ]);
//    if ($validator->fails()) {
//        return response()->json(['errors' => $validator->errors()]);
//    }
//
//    $user = User::where('email', $request['email'])->first();
//
//    if (!$user || !Hash::check($request['password'], $user['password'])) {
////        throw ValidationException::withMessages([
////            'email' => ['The provided credentials are incorrect.'],
////        ]);
//        return response()->json(['Message' => 'The provided credentials are incorrect.']);
//    }
//
//    return response()->json(['Token' => $user->tokens]);
////    return $user->createToken($request['device_name'])->plainTextToken;
//});

//Route::post('/register', function (Request $request) {
//    $validator = Validator::make($request->all(), [
//        'name' => 'required',
//        'email' => 'required|email',
//        'password' => 'required|confirmed',
//        'device_name' => 'required',
//    ]);
//
//    if ($validator->fails()) {
//        return response()->json(['errors' => $validator->errors()]);
//    }
//    try {
//        $user = User::create([
//            'name' => $request['name'],
//            'email' => $request['email'],
//            'password' => Hash::make($request['password']),
//        ]);
//
//    } catch (Exception) {
//        $user = User::where('email', $request['email'])->first();
//        return response()->json(['Token' => $user->tokens]);
//    }
//
//    return $user->createToken($request['device_name'])->plainTextToken;
//});

Route::group(['middleware' => ['auth:sanctum']], function ($route) {
    $route->get('/user', function (Request $request) {
        return $request->user();
    });
    $route->post('/logout', function (Request $request) {
        return $request->user()->currentAccessToken()->delete();
    });
});

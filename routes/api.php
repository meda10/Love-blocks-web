<?php

use App\Models\User;
use Illuminate\Http\Request;
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

Route::post('/login', function (Request $request) {

    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request['email'])->first();

    if (!$user || !Hash::check($request['password'], $user['password'])) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request['device_name'])->plainTextToken;
});

Route::post('/register', function (Request $request) {
    $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required|confirmed',
        'device_name' => 'required',
    ]);

    $user = User::create([
        'name' => $request['name'],
        'email' => $request['email'],
        'password' => $request['password'],
    ]);

    return $user->createToken($request['device_name'])->plainTextToken;
});

Route::group(['middleware' => ['auth:sanctum']], function ($route) {
    $route->get('/user', function (Request $request) {
        return $request->user();
    });
    $route->post('/logout', function (Request $request) {
        return $request->user()->currentAccessToken()->delete();
    });
});

<?php

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

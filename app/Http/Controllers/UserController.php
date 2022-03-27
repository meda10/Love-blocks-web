<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Administration/Users/Index', [
            'users' => User::all()
        ]); //todo N+1??
    }

    public function create(): Response
    {
        return Inertia::render('Administration/Users/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        User::create(Request::validate([
            'name' => ['required', 'string', 'max:30'],
            'surname' => ['required', 'string', 'max:30'],
            'birth' => ['required', 'date', 'date_format:YYYY-MM-DD'],
            'description' => ['required', 'string', 'max:250'],
        ]));
        return Redirect::route('users.index')->with('success', 'User was successfully added');
    }

    public function edit(User $user)
    {
        //
    }

    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user): RedirectResponse
    {
//        $user->delete();
        return Redirect::back()->with('success', 'User deleted');
    }
}

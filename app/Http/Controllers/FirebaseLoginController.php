<?php

namespace App\Http\Controllers;

use App\Actions\FirebaseUserAuthAction;
use App\Actions\Fortify\CreateNewUserFirebase;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Kreait\Firebase\Exception\Auth\FailedToVerifyToken;
use Kreait\Firebase\Exception\AuthException;
use Kreait\Firebase\Exception\FirebaseException;
use Kreait\Laravel\Firebase\Facades\Firebase;

class FirebaseLoginController extends Controller
{

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $auth = Firebase::auth();
        $user = User::where('email', $request['email'])->first();
        if (!$user || !Hash::check($request['password'], $user['password'])) {
            return response()->json(['errors' => ['error' => 'Invalid e-mail or password']]);
        }

        try {
            $customToken = $auth->createCustomToken($user->id);
            $user->firebaseUID = $customToken->toString();
            $user->FCM_token = $request['fcm_token'];
            $user->save();
        } catch (AuthException|FirebaseException $e) {
            return response()->json(['errors' => ['error' => 'Can not login, try again later']]);
        }

        return response()->json([
            'id' => $user['id'],
            'access_token' => $user['firebaseUID'],
            'token_type' => 'Bearer',
            'expires_at' => Carbon::now()->addWeeks()->toDateTimeString()
        ]);
    }

    /**
     * @param Request $request
     * @param CreateNewUserFirebase $createNewUserFirebase
     * @return JsonResponse
     */
    public function register(Request $request, CreateNewUserFirebase $createNewUserFirebase): JsonResponse
    {
        $user = User::where('email', '=', $request['email'])->first();
        if ($user !== null) {
            return response()->json(['errors' => ['error' => 'User with e-mail ' . $request['email'] . ' already exists']]);
        }

        $user_array = [
            'name' => $request['name'],
            'email' => $request['email'],
            'fcm_token' => $request['fcm_token'],
            'password' => $request['password'],
            'password_confirmation' => $request['password_confirmation'],
            'terms' => $request['terms'],
        ];
        $user = $createNewUserFirebase->create($user_array);
        if (array_key_exists('errors', $user)) {
            return response()->json(['errors' => $user['errors']]);
        }
        if (array_key_exists('error', $user)) {
            return response()->json(['errors' => ['error' => $user['error']]]);
        }
        $user = $user['user'];
        return response()->json([
            'id' => $user['id'],
            'access_token' => $user['firebaseUID'],
            'token_type' => 'Bearer',
            'expires_at' => Carbon::now()->addWeeks()->toDateTimeString()
        ]);
    }

    /**
     * @param Request $request
     * @param FirebaseUserAuthAction $firebaseUserAuthAction
     * @return JsonResponse
     */
    public function token(Request $request, FirebaseUserAuthAction $firebaseUserAuthAction): JsonResponse
    {
        $id = $firebaseUserAuthAction->execute($request['id_token']);
        if (array_key_exists('error', $id)) {
            return response()->json(['errors' => ['error' => $id['error']]]);
        }

        $user = User::where('id', '=', $id['id'])->first();
        $user->FCM_token = $request['fcm_token'];
        $user->save();

        return response()->json(['errors' => ['error' => null]]);
    }
}


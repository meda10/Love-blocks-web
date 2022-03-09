<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\CreateNewUserFirebase;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
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
            return response()->json(['error' => 'Invalid e-mail or password']);
        }

//        $idTokenString =
//        try {
//            $verifiedIdToken = $auth->verifyIdToken($idTokenString->toString());
//        } catch (\InvalidArgumentException $e) {
//            return response()->json([
//                'error' => 'Unauthorized - Can\'t parse the token: ' . $e->getMessage()
//            ], 401);
//        } catch (FailedToVerifyToken $e) {
//            return response()->json([
//                'error' => 'Unauthorized - Token is invalide: ' . $e->getMessage()
//            ], 401);
//        }
//        $id = $verifiedIdToken->getClaim('sub');

        try {
            $customToken = $auth->createCustomToken($user->id);
            $user->firebaseUID = $customToken->toString();
            $user->save();
        } catch (AuthException|FirebaseException $e) {
            return response()->json(['error' => 'Can not login, try again later']);
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
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        $user = User::where('email', '=', $request['email'])->first();
        if ($user !== null) {
            return response()->json(["error" => "User with e-mail " . $request['email'] . " already exists"]);
        }

        $user_array = [
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['password'],
            'password_confirmation' => $request['password_confirmation'],
            'terms' => $request['terms'],
        ];
        $user = (new CreateNewUserFirebase)->create($user_array);
        if ($user['error'] !== null) {
            return response()->json($user['error']);
        }

        return response()->json([
            'id' => $user['id'],
            'access_token' => $user['firebaseUID'],
            'token_type' => 'Bearer',
            'expires_at' => Carbon::now()->addWeeks()->toDateTimeString()
        ]);
    }
}


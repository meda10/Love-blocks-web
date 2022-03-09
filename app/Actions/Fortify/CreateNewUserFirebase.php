<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Kreait\Firebase\Exception\AuthException;
use Kreait\Firebase\Exception\FirebaseException;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUserFirebase implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * @param array $input
     * @return User|array
     */
    public function create(array $input): User|array
    {
        $auth = Firebase::auth();
        $validator = Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['required', 'accepted'] : '',
        ]);

        if ($validator->fails()) {
            return ['error' => $validator->errors()];
        }

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        try {
            $customToken = $auth->createCustomToken($user->id);
        } catch (AuthException|FirebaseException $e) {
            return ['error' => 'Can not login, try again later'];
        }

        $user->firebaseUID = $customToken->toString();
        $user->save();
        return $user;
    }
}

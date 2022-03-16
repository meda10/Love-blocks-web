<?php

namespace App\Actions;

use Kreait\Firebase\Contract\Auth;
use Kreait\Firebase\Exception\Auth\FailedToVerifyToken;
use Kreait\Laravel\Firebase\Facades\Firebase;

class FirebaseUserAuthAction
{
    private Auth $auth;

    public function __construct()
    {
        $this->auth = Firebase::auth();
    }

    /**
     * @param $idTokenString
     * @return array
     */
    public function execute($idTokenString): array
    {
        try {
            $verifiedIdToken = $this->auth->verifyIdToken($idTokenString);
        } catch (\InvalidArgumentException $e) {
            return ['error' => 'Unauthorized - Can\'t parse the token: ' . $e->getMessage()];
        } catch (FailedToVerifyToken $e) {
            return ['error' => 'Unauthorized - Token is invalide: ' . $e->getMessage()];
        }
        return ['id' => $verifiedIdToken->claims()->get('sub')];
    }
}

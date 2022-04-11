<?php

namespace App\Actions\Jetstream;

use Laravel\Jetstream\Contracts\DeletesUsers;

class DeleteUser implements DeletesUsers
{
    /**
     * Delete the given user.
     *
     * @param mixed $user
     * @return void
     */
    public function delete($user)
    {
        $user->deleteProfilePhoto();
        $user->removeRole($user->role);
        $user->tokens->each->delete();
        $user->connectedAccounts->each->delete();
        $user->delete();
    }
}

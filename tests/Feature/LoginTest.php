<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function login_existing_user()
    {
        $user = User::create([
            'name' => 'Larry Chongus',
            'email' => 'larry@chongus.com',
            'password' => Hash::make('7777777777')
        ]);

        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => '7777777777',
            'device_name' => 'iphone'
        ]);

        $response->assertSuccessful();
        $this->assertNotEmpty($response->getContent());
        $this->assertDatabaseHas('personal_access_tokens', [
            'name' => 'iphone',
            'tokenable_type' => User::class,
            'tokenable_id' => $user->id
        ]);

    }

    /** @test */
    public function get_user_from_token()
    {
        $user = User::create([
            'name' => 'Larry Chongus',
            'email' => 'larry@chongus.com',
            'password' => Hash::make('7777777777')
        ]);

        $token = $user->createToken('iphone')->plainTextToken;
        $response = $this->get('/api/user', ['Authorization' => 'Bearer ' . $token]);
        $response->assertSuccessful();
        $response->assertJson(function ($json) {
            $json->where('email', 'larry@chongus.com')
                ->missing('password')
                ->etc();
        });
    }
}

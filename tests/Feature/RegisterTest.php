<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function register_new_user()
    {
        $response = $this->post('/api/register', [
            'name' => 'Larry Chongus',
            'email' => 'larry@chongus.com',
            'password' => 'password',
            'password_confirmation' => 'password',
            'device_name' => 'iphone'
        ]);

        $response->assertSuccessful();
        $this->assertNotEmpty($response->getContent());
        $this->assertDatabaseHas('users', ['email' => 'larry@chongus.com']);
        $this->assertDatabaseHas('personal_access_tokens', ['name' => 'iphone']);
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolePermissionSeeder extends Seeder
{
    /**
     * Add roles and permissions
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'administration']);
        Permission::create(['name' => 'show users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'remove users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'user permission']);

        // Add roles and permissions
        $userRole = Role::create(['name' => 'user']);
        $userRole->givePermissionTo('user permission');

        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo('show users');
        $adminRole->givePermissionTo('create users');
        $adminRole->givePermissionTo('remove users');
        $adminRole->givePermissionTo('edit users');
        $userRole->givePermissionTo('user permission');

//        $admin = User::create(['name' => 'Administrator', 'email' => 'admin@gmail.com', 'email_verified_at' => now(), 'password' => Hash::make('1111111111')]);
//        $user = User::create(['name' => 'User', 'email' => 'user@gmail.com', 'email_verified_at' => now(), 'password' => Hash::make('1111111111')]);
//
//        $admin->assignRole($adminRole);
//        $user->assignRole($userRole);
    }
}

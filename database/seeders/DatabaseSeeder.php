<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Exception;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        Project::factory(40)->create()->each(function ($project) {
            $this->attachUsers($project);
        });

    }

    private function attachUsers($project): void
    {
        try {
            $project->users()->attach(implode([random_int(1, 10)]), ['owner' => 1]);
        } catch (Exception) {
        }
        for ($x = 0; $x < 3; $x++) {
            try {
                $project->users()->attach(implode([random_int(1, 10)]));
            } catch (Exception) {
            }
        }
    }
}

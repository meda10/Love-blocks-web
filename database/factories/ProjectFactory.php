<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;


    /**
     * Define the model's default state.
     *
     * @return array
     * @throws \JsonException
     */
    public function definition()
    {
        return [
            'name' => $this->faker->userName(),
            'directory_name' => Str::random(32),
            'blockly_workspace' => json_decode('{}', false, 512, JSON_THROW_ON_ERROR),
            'monaco_workspace' => json_decode('{}', false, 512, JSON_THROW_ON_ERROR),
            'created_at' => now(),
            'updated_at' => now(),
            'editor' => 0,
        ];
    }
}

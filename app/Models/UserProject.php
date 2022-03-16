<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class UserProject
 *
 * @property int $user_id
 * @property int $project_id
 *
 * @property Project $project
 * @property User $user
 *
 * @package App\Models
 */
class UserProject extends Model
{
    public $incrementing = false;
    public $timestamps = false;
    protected $table = 'user_project';
    protected $casts = [
        'user_id' => 'int',
        'project_id' => 'int'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

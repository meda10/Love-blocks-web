<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $casts = [
        'id' => 'int',
    ];

    protected $fillable = [
        'name',
        'directory_name'
    ];

    public function getProjectsByUser($id)
    {
        return User::find($id)->projects;
    }

    public function getProjectOwner()
    {
        return $this->users()->wherePivot('owner', '1')->first();
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_project')->withPivot('owner');
    }

    public function files()
    {
        return $this->hasMany(ProjectFile::class);
    }

    public function userHasAccess(User $user): bool
    {
        $users = $this->users()->get();
        if ($users->contains($user)) {
            return true;
        }
        return false;
    }
}

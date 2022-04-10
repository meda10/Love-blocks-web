<?php

namespace App\Models;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $casts = [
        'id' => 'int',
        'workspace' => 'array',
    ];

    protected $fillable = [
        'name',
        'directory_name',
        'workspace',
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

    public function isProjectOwner(User $user): bool
    {
        $owner = $this->users()->wherePivot('owner', '1')->first();
        return $user['id'] === $owner['id'];
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

    public function getMainLua(): ?string
    {
        try {
            return Storage::disk('local')->get('projects' . DIRECTORY_SEPARATOR . $this['directory_name'] . DIRECTORY_SEPARATOR . 'main.lua');
        } catch (FileNotFoundException $e) {
            return null;
        }
    }
}

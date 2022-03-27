<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $casts = [
        'user_id' => 'int',
        'id' => 'int'
    ];

    protected $fillable = [
        'name',
        'user_id'
    ];

    public function getProjectsByUser($id)
    {
        return User::find($id)->projects;
    }

//    public function getProjectAPK($id)
//    {
//        // todo
//        $this->where('id', $id)->get()->project_files;
//        return $this->where('user_id', $id)->get();
//    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_project');
    }
}

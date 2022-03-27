<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Arr;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ProjectFile
 *
 * @property int $id
 * @property string $name
 * @property int|null $project_id
 * @property string|null $file_path
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class ProjectFile extends Model
{
    protected $table = 'project_files';

    protected $casts = [
        'project_id' => 'int'
    ];

    protected $fillable = [
        'name',
        'project_id',
        'file_path'
    ];

    public function getProjectFiles($projectID)
    {
        return self::where('project_id', $projectID)->get(['name', 'file_path', 'id'])->mapWithKeys(function ($item, $key) {
            return [$item['name'] => ['file_path' => $item['file_path'], 'id' => $item['id']]];
        });
    }
}

<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

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
}

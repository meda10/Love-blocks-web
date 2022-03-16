<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class CustomBlock
 * 
 * @property int $id
 * @property string $name
 * @property array|null $block
 * @property int|null $project_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class CustomBlock extends Model
{
	protected $table = 'custom_blocks';

	protected $casts = [
		'block' => 'json',
		'project_id' => 'int'
	];

	protected $fillable = [
		'name',
		'block',
		'project_id'
	];
}

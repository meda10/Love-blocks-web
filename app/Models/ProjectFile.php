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

    public static function defaultConfig(): string
    {
        return '
        function love.conf(t)
            t.identity = nil                        -- The name of the save directory (string)
            t.version = "11.3"                      -- The LÖVE version this game was made for (string)
            t.console = false                       -- Attach a console (boolean, Windows only)

            t.window.title = "GAME III"             -- The window title (string)
            t.window.icon = nil                     -- Filepath to an image to use as the window\'s icon (string)
            t.window.width = gw                     -- The window width (number)
            t.window.height = gh                    -- The window height (number)
            t.window.borderless = false             -- Remove all border visuals from the window (boolean)
            t.window.resizable = true               -- Let the window be user-resizable (boolean)
            t.window.minwidth = 1                   -- Minimum window width if the window is resizable (number)
            t.window.minheight = 1                  -- Minimum window height if the window is resizable (number)
            t.window.fullscreen = false             -- Enable fullscreen (boolean)
            t.window.fullscreentype = "exclusive"   -- Standard fullscreen or desktop fullscreen mode (string)
            t.window.vsync = true                   -- Enable vertical sync (boolean)
            t.window.fsaa = 0                       -- The number of samples to use with multi-sampled antialiasing (number)
            t.window.display = 1                    -- Index of the monitor to show the window in (number)
            t.window.highdpi = false                -- Enable high-dpi mode for the window on a Retina display (boolean)
            t.window.srgb = false                   -- Enable sRGB gamma correction when drawing to the screen (boolean)
            t.window.x = nil                        -- The x-coordinate of the window\'s position in the specified display (number)
            t.window.y = nil                        -- The y-coordinate of the window\'s position in the specified display (number)

            t.modules.audio = true                  -- Enable the audio module (boolean)
            t.modules.event = true                  -- Enable the event module (boolean)
            t.modules.graphics = true               -- Enable the graphics module (boolean)
            t.modules.image = true                  -- Enable the image module (boolean)
            t.modules.joystick = true               -- Enable the joystick module (boolean)
            t.modules.keyboard = true               -- Enable the keyboard module (boolean)
            t.modules.math = true                   -- Enable the math module (boolean)
            t.modules.mouse = true                  -- Enable the mouse module (boolean)
            t.modules.physics = true                -- Enable the physics module (boolean)
            t.modules.sound = true                  -- Enable the sound module (boolean)
            t.modules.system = true                 -- Enable the system module (boolean)
            t.modules.timer = true                  -- Enable the timer module (boolean), Disabling it will result 0 delta time in love.update
            t.modules.window = true                 -- Enable the window module (boolean)
            t.modules.thread = true                 -- Enable the thread module (boolean)
        end';
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function f($projectID)
    {
        return self::where('project_id', $projectID)->get(['name', 'file_path', 'id'])->mapWithKeys(function ($item, $key) {
            return [$item['name'] => ['file_path' => $item['file_path'], 'id' => $item['id']]];
        });
    }

    public function getProjectFiles($projectID)
    {
        return self::where('project_id', $projectID)->get(['name', 'file_path', 'id'])->mapWithKeys(function ($item, $key) {
            return [$item['name'] => ['file_path' => $item['file_path'], 'id' => $item['id']]];
        });
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class FileResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this['id'],
            'name' => $this['name'],
            'path' => 'resources/' . $this['name'],
            'created_at' => $this['created_at'] !== null ? $this['created_at']->format('d M Y, H:i a') : '',
        ];
    }
}

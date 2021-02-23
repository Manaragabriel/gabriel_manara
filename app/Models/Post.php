<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
class Post extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['id','title','subtitle','content','views','image','image_mobile','author_id','slug'];

    protected $attributes = [
        'views' => 0,
    ];

    public function setSlug($value = null){
         $value = $value ? $value : $this->title;
         $this->slug =  Str::slug($value);
    }

}
<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
class MainController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('id','desc')->take(3)->get();
      
        $data['seo'] = $this->seo->generate_tags( "Gabriel Manara | Desenvolvedor Web",
                                                    "Is a compact and easy-to-use tag creator to optimize your site",
                                                    url('/'),
                                                    url('/assets_site/images/eu.jpg')
                                                );

        return view('site/index',$data);
    }

    
}

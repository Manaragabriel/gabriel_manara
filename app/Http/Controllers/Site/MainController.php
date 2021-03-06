<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('id','desc')->take(3)->get();
        return view('site/index');
    }

    public function service_site(){
        return view('site/service_site');
    }

    public function service_system(){
        return view('site/service_system');
    }
    public function service_ecommerce(){
        return view('site/service_ecommerce');
    }
}

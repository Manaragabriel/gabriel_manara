<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\App;
class MainController extends Controller
{
    public function index($language = 'pt')
    {
        $language === 'en' ? App::setLocale('en') : App::setLocale('pt');

        $data['seo'] = $this->seo->generate_tags( "Gabriel Manara | Desenvolvedor Web",
                                                    "Is a compact and easy-to-use tag creator to optimize your site",
                                                    url('/'),
                                                    url('/assets_site/images/eu.jpg')
                                                );

        return view('site/index',$data);
    }

    
}

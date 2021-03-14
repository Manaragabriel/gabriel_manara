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

        $data['seo'] = $this->seo->generate_tags( __("Gabriel Manara | Desenvolvedor Web"),
                                                    __("Desenvolvedor Web FullStack"),
                                                    url('/'),
                                                    url('/assets_site/images/eu.jpg')
                                                );

        return view('site/index',$data);
    }

    
}

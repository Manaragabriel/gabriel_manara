<?php 
namespace App\Libraries;
use CoffeeCode\Optimizer\Optimizer;

class Seo {

    private $optimizer;

    public function __construct(){
        $this->optimizer = new Optimizer();
    }

    public function generate_tags($title,$description, $link, $image){
        return $this->optimizer->optimize($title,$description,$link,$image)->render();
    }

}




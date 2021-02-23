<?php

namespace App\Http\Livewire\Post;

use Livewire\Component;

class CreatePosts extends Component
{
    public $posts = [];
    public $teste;

    public function addPost(){
        $this->posts[] = ['title' => 'teste', 'content' => ''];
      //  dd($this->teste);
        
    }

    public function mount(){
        
    }
    
    public function render()
    {
        return view('livewire.post.create-posts');
    }


} 

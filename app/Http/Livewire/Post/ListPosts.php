<?php

namespace App\Http\Livewire\Post;

use Livewire\Component;
use App\Models\Post;
use Livewire\WithPagination;
class ListPosts extends Component
{
    use WithPagination;

    public $search;

    public function updatingSearch(){
        $this->resetPage();
    }
    public function render()
    {
        
        return view('livewire.post.list-posts',[
            'posts' => Post::where('title', 'like', '%'.$this->search.'%')->paginate(10)
        ]);
    }
} 

<?php

namespace App\Http\Livewire\User;

use Livewire\Component;
use App\Models\User;
use Livewire\WithPagination;
class ListUsers extends Component
{
    use WithPagination;

    public $search;

    public function updatingSearch(){
        $this->resetPage();
    }
    public function render()
    {
        
        return view('livewire.user.list-users',[
            'users' => User::where('name', 'like', '%'.$this->search.'%')->paginate(10)
        ]);
    }
}
 
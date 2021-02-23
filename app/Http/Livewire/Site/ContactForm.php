<?php

namespace App\Http\Livewire\Site;

use Livewire\Component;

class ContactForm extends Component
{
    public $name;
    public $email;
    public $phone;
    public $company;
    public $message;
    public $accept;

    protected $rules = [
        'name' => 'required|min:2',
        'email' => 'required|email',
        'phone' => 'required|min:11',
        'company' => 'required|min:2',
        'message' => 'required|min:10',
        'accept' => 'required'
    ];


    public function sendContact(){
        
        
    }
    public function render()
    {
        return view('livewire.site.contact-form');
    }
}

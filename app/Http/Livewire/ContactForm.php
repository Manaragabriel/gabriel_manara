<?php

namespace App\Http\Livewire;

use Livewire\Component;
use DanHarrin\LivewireRateLimiting\Exceptions\TooManyRequestsException;
use DanHarrin\LivewireRateLimiting\WithRateLimiting;
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendContactMail;
class ContactForm extends Component
{
    use WithRateLimiting;

    public $name = '';
    public $email = '';
    public $phone = '';
    public $message = '';
    public $error = '';


    protected $rules = [
        'name' => 'required',
        'email' => 'required|email',
        'phone' => 'required',
        'message' => 'required|max:1000',

    ];

    protected $messages = [
        'name.required' => 'Nome é obrigatório',
        'email.required' => 'Email é obrigatório',
        'email.email' => 'É necessário digital um endereço de email válido',
        'phone.required' => 'Telefone é obrigatório',
        'message.required' => 'Você deve deixar uma mensagem',
        'message.max' => 'Mensagem deve contér no maximo 1000 caracteres',
    ];

    public function submit(){
          try {
           // $this->rateLimit(5,7200);
            $contact = $this->validate();
            Mail::to(env('MAIL_TO_ADDRESS'))->send(new SendContactMail($contact));

        } catch (\Exception $exception) {
            $this->error =  __("Aguarde 2 horas para enviar o formulário de novo");
            dd($exception);
            return;
        }
        
    }
    public function render()
    {
        return view('livewire.contact-form');
    }
}

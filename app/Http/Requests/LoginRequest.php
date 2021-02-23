<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email|max:256',
            'password' => 'required|min:6|max:256',
        ];
    }
    public function messages(){
        return [
            'email.required' => 'O email  é obrigatório',
            'password.required' => 'A senha é obrigatória',
        ];
    }
}

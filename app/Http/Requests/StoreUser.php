<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUser extends FormRequest
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
            'name' => 'required|max:256',
            'email' => 'required|unique:users',
            'password' => 'required|min:6|max:256',
            'is_admin' => 'nullable|boolean'
           
        ];
    }
    public function messages(){
        return [
            'name.required' => 'O nome é obrigatório',
            'email.required' => 'O email  é obrigatório',
            'password.required' => 'A senha é obrigatória',
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function rules()
    {
        return [
            'name' => 'required|max:256',
            'email' => 'required|unique:users,email,'.$this->id.'id',
            'password' => 'nullable|min:6|max:256',
            'is_admin' => 'nullable|boolean'
        ];
    }
    public function messages(){
        return [
            'name.required' => 'O nome é obrigatório',
            'email.required' => 'O email  é obrigatório',
            
        ];
    }

    
}

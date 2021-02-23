<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Requests\LoginRequest;
class AuthController extends Controller
{
    
    public function login(){
        return view('admin/auth/login');
    }

    public function store(LoginRequest $request){
        try{
            $authData = $request->validated();
            $user = User::where('email', $authData['email'])->first();
            if(!empty($user)){
                if(Auth::attempt($authData)){
                    return redirect('admin/dashboard');
                }
                return back()->withErrors([
                    'password' => 'Senha incorreta',
                ]);
            }else{
                return back()->withErrors([
                    'email' => 'Email não encontrado',
                ]);
            }
            
        }catch(\Exception $e){
            dd($e->getMessage());
            return redirect()->back();
        }
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    }
}

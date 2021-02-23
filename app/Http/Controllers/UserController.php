<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUser;
use App\Http\Requests\UpdateUser;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        return view('admin/users/index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
     
        return view('admin/users/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUser $request)
    {
        try{
            $user = $request->validated();
          
            if($request->hasFile('avatar')){
                $file_name = $request->file('avatar')->getClientOriginalName();
                $file_path = 'public/users/'.$file_name;
                Storage::disk('local')->put($file_path, file_get_contents($request->file('avatar')));
                $user['avatar'] = $file_name;
                
            }
            $user = new User($user);
            $user->save();
            return redirect('usuarios');
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    
        return view('admin/users/edit', ['user' => User::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUser $request,$id)
    {
        try{
            $updateUser = $request->validated();
            $user = User::where('id',$id)->first();
            
            if($request->hasFile('avatar')){
                $file_name = $request->file('avatar')->getClientOriginalName();
                $file_path = 'public/users/'.$file_name;
                Storage::disk('local')->put($file_path, file_get_contents($request->file('avatar')));
                Storage::disk('local')->delete('public/users/'.$user['avatar']);
                $updateUser['avatar'] = $file_name; 
            }

            $user->update($updateUser);
            return redirect('usuarios');
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            User::find($id)->delete();
            return redirect('usuarios');
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }
}

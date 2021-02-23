<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Http\Requests\UpdatePost;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        return view('admin/posts/index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
     
        return view('admin/posts/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        try{
            $post = $request->validated();
          
            if($request->hasFile('image')){
                $file_name = $request->file('image')->getClientOriginalName();
                $file_path = 'public/thumbs/'.$file_name;
                Storage::disk('local')->put($file_path, file_get_contents($request->file('image')));
                $post['image'] = $file_name;
                
            }
            $post = new Post($post);
            $post->setSlug();
            $post->save();
            return redirect('posts');
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    
        return view('admin/posts/edit', ['post' => Post::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePost $request,$id)
    {
        try{
            $updatePost = $request->validated();
            $updatePost['slug'] = Str::slug($updatePost['title']);
            $post = Post::where('id',$id)->first();
            if($request->hasFile('image')){
                $file_name = $request->file('image')->getClientOriginalName();
                $file_path = 'public/thumbs/'.$file_name;
                Storage::disk('local')->put($file_path, file_get_contents($request->file('image')));
                Storage::disk('local')->delete('public/thumbs/'.$post['image']);
                $updatePost['image'] = $file_name; 
            }

            $post->update($updatePost);
            return redirect('posts');
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            Post::find($id)->delete();
            return redirect('posts');
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }
}

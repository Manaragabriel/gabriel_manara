@extends('layout')

@section('styles')
    <link rel="stylesheet" href="/assets/plugins/summernote/summernote-bs4.min.css"/>
@endsection

@section('content')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Posts</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Posts</a></li>
                        <li class="breadcrumb-item active">Editar</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid ">

            <div class="card  card-primary bg-white">
                <div class="card-header">
                    <h3 class="card-title">Edita postagem</h3>
                </div>

                <div class="card-body">
                    <form method="POST" enctype="multipart/form-data" action="/admin/posts/{{$post->id}}">
                        {{csrf_field()}}
                        {{method_field('PUT')}}
                       
                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="title">Titulo do post*</label>
                                    <input type="text" name="title" id="title" value="{{$post->title}}" class="form-control"
                                        placeholder="Digite o titulo do post" />
                                </div>
                                @error('title')
                                    <span class="text-danger">{{$errors->first('title')}}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="subtitle">Subtitulo do post</label>
                                    <input type="text" name="subtitle" id="subtitle" value="{{$post->subtitle}}" class="form-control"
                                        placeholder="Digite o subtitulo do post" />
                                </div>
                                @error('subtitle')
                                    <span class="text-danger">{{$errors->first('subtitle')}}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-12">
                                <div class="form-group">
                                    <label for="subtitle">Conteudo*</label>
                                    <textarea  name="content" id="content" class="form-control"
                                    >
                                    {{$post->content}}
                                    </textarea>
                                </div>
                                @error('content')
                                    <span class="text-danger">{{$errors->first('content')}}</span>
                                @enderror
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-12 col-lg-12">
                                <div class="form-group">
                                    <label for="subtitle">Imagem de capa</label>
                                    <input type="file" name="image" id="" class="form-control"/>
                                
                                    
                                </div>
                                @error('image')
                                    <span class="text-danger">{{$errors->first('image')}}</span>
                                @enderror
                            </div>
                        </div>

                        
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary text-white" type="submit">Enviar</button>
                        </div>

                    </form>

                </div>


            </div>


        </div>
    </div>

</div>

@endsection

@section('scripts')
    <script src="/assets/plugins/summernote/summernote-bs4.min.js"></script>
@endsection
@extends('layout')


@section('styles')
<link rel="stylesheet" href="/assets/plugins/summernote/summernote-bs4.min.css" />
@endsection

@section('content')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Usuários</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Usuários</a></li>
                        <li class="breadcrumb-item active">Novo</li>
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
                    <h3 class="card-title">Formulário para criar Usuários</h3>
                </div>

                <div class="card-body">
                    <form method="POST" action="/admin/usuarios/" enctype="multipart/form-data">
                        {{csrf_field()}}

                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="name">Nome do usuário*</label>
                                    <input type="text" name="name" id="name" value="{{old('name')}}"
                                        class="form-control" placeholder="Digite o nome do usuário" />
                                </div>
                                @error('name')
                                <span class="text-danger">{{$errors->first('name')}}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="email">Email do usuário</label>
                                    <input type="text" name="email" id="email" value="{{old('email')}}"
                                        class="form-control" placeholder="Digite o email do usuário" />
                                </div>
                                @error('email')
                                <span class="text-danger">{{$errors->first('email')}}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="password">Senha do usuário</label>
                                    <input type="password" name="password" id="password" value="{{old('password')}}"
                                        class="form-control" placeholder="Digite a senha do usuário" />
                                </div>
                                @error('password')
                                <span class="text-danger">{{$errors->first('password')}}</span>
                                @enderror
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="avatar">Avatar</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" name="avatar" class="custom-file-input" id="avatar">
                                            <label class="custom-file-label" for="image">Escolha a imagem</label>
                                        </div>
                                       
                                    </div>


                                </div>
                                @error('avatar')
                                <span class="text-danger">{{$errors->first('avatar')}}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="form-group">
                                    <label for="is_admin">Administrador:</label>
                                    <input type="checkbox" name="is_admin" value="1" id="is_admin" value="{{old('is_admin')}}"
                                        /> Sim
                                </div>
                                @error('is_admin')
                                <span class="text-danger">{{$errors->first('is_admin')}}</span>
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
<script src="/assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js"></script>
@endsection
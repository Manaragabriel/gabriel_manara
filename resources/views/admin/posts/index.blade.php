@extends('layout')

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
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Posts</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12 bg-white py-3">

                    <div class="d-flex justify-content-end">
                        <a class="btn btn-primary text-white"  href="/admin/posts/novo"><i class="fas fa-plus mr-2"></i>Adicionar Post</a>
                    </div>

                    

                    <livewire:post.list-posts>
                    </livewire>


                </div>
            </div>

        </div>
    </div>

</div>

@endsection
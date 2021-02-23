<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login | Wolf CMS</title>
        <link rel="stylesheet" href="/assets/plugins/fontawesome-free/css/all.min.css">
        <link rel="stylesheet" href="/assets/dist/css/adminlte.min.css">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>

        <div class="bg-dark-primary roboto d-flex justify-content-center align-items-center v-100">
         
            <div class="col-10  col-lg-3 bg-white px-4 py-5 rounded">
                <form method="POST">
                {{csrf_field()}}
                <h4 class="text-center ">Painel de login</h4>
                <div class="d-flex justify-content-center py-2">
                    <div class="input-group mb-3 col-10">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        </div>
                        <input type="email" class="form-control" name="email" value="{{old('email')}}" placeholder="Email">
                        
                    </div>
                    
                </div>

                @if($errors->any('email'))
                    <div class="d-flex justify-content-center ">
                        <div class="col-10">
                            <span class="text-danger">{{$errors->first('email')}}</span>
                        </div>
                    </div>

                @endif

                <div class="d-flex justify-content-center py-2">
                    <div class="input-group mb-3 col-10">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control"  name="password" placeholder="Senha">
                    </div>
                </div>

                @if($errors->any('password'))
                    <div class="d-flex justify-content-center ">
                        <div class="col-10">
                            <span class="text-danger">{{$errors->first('password')}}</span>
                        </div>
                    </div>

                @endif

                <div class="d-flex justify-content-center py-2">
                    
                    <div class="col-10">
                        <input type="submit" class="btn btn-primary w-100" placeholder="Entrar">

                    </div>                    
                </div>

                <div class=" py-2">
                    
                    <div class="text-center">
                       <p>Esqueceu sua senha ? <a class="text-primary font-weight-bold" href="#">Recuperar senha</a></p>

                    </div>                    
                </div>

                </form>
            </div>
         
        </div>  
  

     
        <script src="/assets/plugins/jquery/jquery.min.js"></script>
        <script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/dist/js/adminlte.min.js"></script>
        <script src="/assets/dist/js/scripts.js"></script>
       
    </body>
</html>
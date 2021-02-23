<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Wolf CMS</title>
        <link rel="stylesheet" href="/assets/plugins/fontawesome-free/css/all.min.css">
        <link rel="stylesheet" href="/assets/dist/css/adminlte.min.css">
        @livewireStyles
        @yield('styles')
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>


        @include('admin/includes/header')

        @include('admin/includes/aside')

        @yield('content')

        @include('admin/includes/footer')

     
        <script src="/assets/plugins/jquery/jquery.min.js"></script>
    
        <script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

        @yield('scripts')

        @livewireScripts
     
        @stack('scripts-livewire')
        <script src="/assets/dist/js/adminlte.min.js"></script>
        <script src="/assets/dist/js/scripts.js"></script>
       
    </body>
</html>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <title>Wolf8B Tecnologia - As melhores soluções em tecnologia</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link href="{{asset('assets_site/css/bootstrap.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/fontawesome-all.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/owl.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/flaticon.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/animate.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/jquery-ui.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/jquery.fancybox.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets_site/css/hover.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('assets_site/css/jarallax.css')}}">
    <link href="{{asset('assets_site/css/custom-animate.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="/{{asset('assets_site/css/swiper.min.css')}}">
    <link href="{{asset('assets_site/css/style.css')}}" rel="stylesheet">
    <!-- rtl css -->
    <link href="{{asset('/assets_site/css/rtl.css')}}" rel="stylesheet">
    <!-- Responsive File -->
    <link href="{{asset('/assets_site/css/responsive.css')}}" rel="stylesheet">

    <!-- Color css -->
    <link rel="stylesheet" id="jssDefault" href="{{asset('assets_site/css/colors/color-7.css')}}">

    <!-- variable update -->
    <link rel="stylesheet" href="{{asset('assets_site/css/variables/index-4.css')}}">

    <link rel="shortcut icon" href="{{asset('assets_site/images/favicon.png')}}" id="fav-shortcut" type="image/x-icon">
    <link rel="icon" href="{{asset('assets_site/images/favicon.png')}}" id="fav-icon" type="image/x-icon">

    <!-- Responsive Settings -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    @livewireStyles
    @yield('styles')
</head>

<body>
    @include('site/includes/header')

    @yield('content')

    @include('site/includes/footer')


    <script src="{{asset('assets_site/js/jquery.js')}}"></script>
    <script src="{{asset('assets_site/js/popper.min.js')}}"></script>
    <script src="{{asset('assets_site/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets_site/js/TweenMax.js')}}"></script>
    <script src="{{asset('assets_site/js/jquery-ui.js')}}"></script>
    <script src="{{asset('assets_site/js/jquery.fancybox.js')}}"></script>
    <script src="{{asset('assets_site/js/owl.js')}}"></script>
    <script src="{{asset('assets_site/js/appear.js')}}"></script>
    <script src="{{asset('assets_site/js/wow.js')}}"></script>
    <script src="{{asset('assets_site/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets_site/js/jarallax.min.js')}}"></script>
    <script src="{{asset('assets_site/js/swiper.min.js')}}"></script>
    <script src="{{asset('assets_site/js/custom-script.js')}}"></script>
    @livewireScripts
    @yield('scripts')

</body>

</html>
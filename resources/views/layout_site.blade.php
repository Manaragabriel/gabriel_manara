<!DOCTYPE html>
<html dir="ltr" lang="pt-BR">
<head>

	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="author" content="SemiColonWeb" />
	<base href="{{asset('')}}"/>
	<!-- Stylesheets
	============================================= -->
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&display=swap" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/bootstrap.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/style.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/dark.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/font-icons.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/animate.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/magnific-popup.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/style.css')}}" type="text/css" />
	<link rel="stylesheet" href="{{asset('assets_site/css/custom.css')}}" type="text/css" />
	<link rel="shortcut icon" href="{{asset('assets_site/images/favicon.ico')}}" type="image/x-icon">
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	{!! $seo !!}


	<!-- Document Title
	============================================= -->
	<title>Gabriel Manara | Desenvolvedor WEB</title>

</head>

<body class="stretched">
	<div id="wrapper" class="clearfix">
    	@include('site/includes/header')

    	@yield('content')

    	@include('site/includes/footer')


	</div>
    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>
	<div id="gotoTop" class="icon-angle-up"></div>
	@livewireScripts
	<script src="{{asset('assets_site/js/jquery.js')}}"></script>
	<script src="{{asset('assets_site/js/jquery.mask.min.js')}}"></script>
	<script src="{{asset('assets_site/js/plugins.min.js')}}"></script>
	<script src="{{asset('assets_site/js/functions.js')}}"></script>
	<script src="{{asset('assets_site/js/scripts.js')}}"></script>
</body>
</html>

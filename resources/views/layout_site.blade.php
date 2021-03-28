<!DOCTYPE html>
<html dir="ltr" lang="pt-BR">
<head>

	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<base href="{{asset('')}}"/>
	<!-- Stylesheets
	============================================= -->
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&display=swap" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css" />
	@livewireStyles
	<link rel="shortcut icon" href="{{asset('assets_site/images/favicon.ico')}}" type="image/x-icon">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="google-site-verification" content="p0_hVxJlQU9daLxbyRYU9xXf_6pYgXRhp7qCQ3gsfbs" />
	{!! $seo !!}
	<meta name="keywords" content="{{__('desenvolvedor web, dev web, desenvolvedor full-stack,desenvolvedor back-end,desenvolvedor front-end, desenvolvedor php, programador, desenvolvedor javascript, desenvolvedor freelancer, freelancer, agencia')}}"/>
	<meta name="author" content="Gabriel Manara"/>


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
	<script src="{{asset('js/app.js')}}"></script>

</body>
</html>

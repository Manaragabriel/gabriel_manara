@extends('layout_site')
@section('content')	
	


		<!-- Header
		============================================= -->


		<!-- Page Title
		============================================= -->
		<section id="page-title" class="page-title-parallax page-title-dark page-title-right include-header" style="padding: 250px 0; background-image: url('images/about/me-parallax.jpg'); background-size: cover; background-position: center center;" data-bottom-top="background-position:0px 440px;" data-top-bottom="background-position:0px -500px;">

			<div class="container pt-0">
			      <div class="row">

					<div class="col-lg-6 d-flex justify-content-center">
						<img alt="Gabriel Manara" src="{{asset('assets_site/images/eu.jpg')}}" class="top-photo br-100"/>
					</div>
					
					<div class="col-lg-6 d-flex align-items-center">
						<div >
							<h1>GABRIEL MANARA</h1>
							<span>{{__('Desenvolvedor WEB')}}</span>
						</div>
				  	</div>
				  
				  </div>
			</div>

		</section><!-- #page-title end -->

		<!-- Content
		============================================= -->
		<section id="content">
			<div class="content-wrap pb-0" id="sobre-mim">
				<div class="container">

					<div class="row">
						<div class="col-lg-12">
							<h2 class="text-center">{{__('SOBRE MIM')}}</h2>

							<p class="text-center">{{ __('Eu sou desenvolvedor WEB, gosto bastante de programação e estou sempre a procura de aprender coisas novas e enfrentar novos desafios')}}<br>
									{{__('Estou sempre atento ao mercado e as novas tecnológias, nos meus projetos gosto de aplicar as melhores práticas para garantir a melhor qualidade.')}}
							</p>
							<p class="text-center font-weight-bold">{{__('Estou a disposição para conversarmos, e quem sabe, fechar um projeto')}} :) </p>

						</div>

					</div>

				</div>

		
				<div class="section mb-0">
					<div class="container">
						<div class="heading-block center border-bottom-0 mb-0">
							<h3>{{__('MINHAS SKILLS')}}</h3>
						</div>
						<div>
							
							<ul class="skills">
								<li data-percent="100">
									<span>PHP</span>
									<div class="progress">
										<div class="progress-percent"><div class="counter counter-inherit counter-instant"><span data-from="0" data-to="100" data-refresh-interval="30" data-speed="1000"></span>%</div></div>
									</div>
								</li>
								
								<li data-percent="100">
									<span>Laravel</span>
									<div class="progress">
										<div class="progress-percent"><div class="counter counter-inherit counter-instant"><span data-from="0" data-to="100" data-refresh-interval="30" data-speed="1000"></span>%</div></div>
									</div>
								</li>
						
								<li data-percent="100">
									<span>CSS3</span>
									<div class="progress">
										<div class="progress-percent"><div class="counter counter-inherit counter-instant"><span data-from="0" data-to="100" data-refresh-interval="30" data-speed="1000"></span>%</div></div>
									</div>
								</li>
								<li data-percent="100">
									<span>HTML5</span>
									<div class="progress">
										<div class="progress-percent"><div class="counter counter-inherit counter-instant"><span data-from="0" data-to="100" data-refresh-interval="30" data-speed="1000"></span>%</div></div>
									</div>
								</li>
								<li data-percent="100">
									<span>Javascript</span>
									<div class="progress">
										<div class="progress-percent"><div class="counter counter-inherit counter-instant"><span data-from="0" data-to="100" data-refresh-interval="30" data-speed="1000"></span>%</div></div>
									</div>
								</li>
							</ul>

						</div>
					</div>
				</div>


			</div>
		</section><!-- #content end -->

		<section class="p-5" id="servicos">
			<div class="container">
				<h2 class="text-center">{{__('SERVIÇOS')}}</h2>
				<div class="row">
					<div class="col-lg-6 px-3">
						<img alt="Serviços de criação de sites e ecommerce" class="image-services" src="{{asset('assets_site/images/site.jpg')}}"/>
						<h3 class="text-center">{{__('Sites e Ecommerce')}}</h3>
						<p class="text-center">
						{{__('Posso atuar em projetos de Sites e Ecommerce')}}<br>
							{{__('Passei a maior parte da minha carreira')}}
								{{__('trabalhando com este tipo de projeto,')}}
									{{__('gosto de aplicar sempre as melhores práticas,')}}
										{{__('utilizando as melhores tecnólogias, se preocupando')}}
											{{__('com a Responsividade e questões de SEO e otimização')}}
						</p>
					</div>
					<div class="col-lg-6 px-3">
						<img alt="Serviços de criação de sistemas e api's" class="image-services" src="{{asset('assets_site/images/sistema.jpg')}}"/>
						<h3 class="text-center">{{__("Sistemas e API's")}}</h3>
						<p class="text-center">
						{{__('Possuo expêriencia com criação de Sistemas e API´s')}}<br>
							{{__('Gosto bastante de resolver problemas e trazer soluções')}}
								{{__('para os problemas das pessoas. Sempre me esforço em criar a melhor')}}
									{{__('solução para automatizar processos e melhorar o trabalho das pessoas')}}
						</p>
					</div>
				</div>
			</div>
		</section>


		<section class="" id="portfolio">
			<div class="container">
				<h2 class="text-center">{{__('Meu Portfolio')}}</h2>
				<div class="row">
					<div class="col-lg-6 px-3">
						<img  alt="Portifolio - 1" class="image-services" src="{{asset('assets_site/images/w2.jpg')}}"/>
						<h3 class="text-center">W2GETHER DIGITAL MAKERS</h3>
						<div class="font-weight-bold text-center">{{__('Desenvolvedor FullStack')}}</div>
						<p class="text-center">
							27/09/2020 - {{__('Atualmente')}}
						</p>
					</div>
					<div class="col-lg-6 px-3">
						<img alt="Portifolio" class="image-services" src="{{asset('assets_site/images/valore.png')}}"/>
						<h3 class="text-center">VALORE MARKETING E TECNÓLOGIA</h3>
						<div class="font-weight-bold text-center">{{__('Desenvolvedor FullStack')}}</div>
						<p class="text-center">
							24/06/2019 - 24/09/2020
						</p>
					</div>
				</div>
			</div>

		</section>

		<section class="section m-0 clearfix" id="contato">
					<h3 class="text-center">{{__('ENTRE EM CONTATO COMIGO!')}}</h3>
				    <div class="container">
						<div class="row">
						

							<div class="col-lg-6 col-md-6 order-2  order-lg-1 bottommargin clearfix">
								

								<div class="d-flex pt-lg-5 justify-content-center">
									<p>
										<span class="contact-data-title">E-mail:</span> <a href="mailto:gabrielmanara2010@hotmail.com" class="contact-data-content">  gabrielmanara2010@hotmail.com</a><br>
										<span class="contact-data-title">{{__('Whatsapp/Celular:')}}</span> <a href="https://api.whatsapp.com/send?phone=5519983708165" class="contact-data-content">(19)98370-8165</a>

									</p>
								</div>

							
								
	
							</div>
	
							<div class="col-lg-6 order-1  order-lg-2 bottommargin clearfix">
	
							<livewire:contact-form/>
								
	
							</div>
						</div>
					</div>

		</section>

	<!--	<section class="p-3" id="blog">
			<div class="container">
				<h2 class="text-center">BLOG</h2>
			</div>
		</section> -->
		
		


@endsection
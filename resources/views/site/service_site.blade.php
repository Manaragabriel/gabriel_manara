@extends('layout_site')

@section('content')

<section id="top-content" class="p-5 ">
    <div class="container">
        <div class="row py-5">

            <div class="col-lg-12 d-flex align-items-center justify-content-center">

                <h1 class="text-white  font-weight-bold py-3 h2">Desenvolvimento de sites personalizados</h1>


            </div>

        </div>
    </div>
</section>


<section class="p-5">
    <div class="container">

        <div class="row py-5">

            <div class="col-lg-6">

                <h2 class="font-weight-bold py-3 h2">Sites sob medida para seu negócio</h2>

                <p>Oferecemos as melhores soluções para criação de sites, utilizando tecnógias e metodologias modernas para prestar o melhor serviço.</p>
                <p>Para você que precisa de um <b>site personalizado</b> para seu negócio,iremos criar uma solução sob medida que atenda tudo que você precisa  </p>
            </div>

        </div>

    </div>


</section>

<section class="p-5">
    <div class="container">
        <h2 class="font-weight-bold text-center  h2">Vantagens</h2>

        <div class="row py-5">
            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-responsive"></span></div>
                    <h6><a href="web-development.html">Mobile <br>First</a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-development"></span></div>
                    <h6><a href="digital-marketing.html">Painel <br>Intuitivo</a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">SEO <br> Friendly</a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">Plataforma <br> Própria</a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">CMS<br></a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">Segurança <br></a></h6>
                </div>
            </div>

    </div>


</section>

<section id="contato" class="p-5">
    <div class="container">
        <h4 class="text-center fadeInLeft">Venha falar com a gente!</h4>
        <livewire:site.contact-form>
            </livewire>

    </div>
</section>

@endsection
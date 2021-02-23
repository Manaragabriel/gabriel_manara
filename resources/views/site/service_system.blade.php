@extends('layout_site')

@section('content')

<section id="top-content" class="p-5 ">
    <div class="container">
        <div class="row py-5">

            <div class="col-lg-12 d-flex align-items-center justify-content-center">

                <h1 class="text-white  font-weight-bold py-3 h2">Desenvolvimento de Sistemas WEB</h1>


            </div>

        </div>
    </div>
</section>


<section class="p-5">
    <div class="container">

        <div class="row py-5">

            <div class="col-lg-6">

                <h2 class="font-weight-bold py-3 h2">Soluções em sistemas pensadas no seu negócio</h2>

                <p>Utilizamos as tecnologias e metódologias mais modernas do mercado para poder criar as melhores soluções para sua empresa </p>
                <p>Iremos modelar e implantar a solução mais adequada para resolver seus problemas e melhorar a sua gestão, prezando sempre em oferecer a melhor qualidade, eficiência e suporte </p>
            </div>

        </div>

    </div>


</section>

<section class="p-5">
    <div class="container">
        <h2 class="font-weight-bold text-center  h2">Nossos Pilares</h2>

        <div class="row py-5">
            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-responsive"></span></div>
                    <h6><a href="web-development.html">Metodologias ágeis</a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-development"></span></div>
                    <h6><a href="digital-marketing.html">Qualidade<br></a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">Desempenho </a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">Soluções <br>personalizadas</a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">Soluções flexíveis<br></a></h6>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="service-block-three__single">
                    <div class="icon-box"><span class="flaticon-app-development"></span></div>
                    <h6><a href="app-development.html">Preços Justo<br></a></h6>
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
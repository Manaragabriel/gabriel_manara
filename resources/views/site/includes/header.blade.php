

<header id="header" class="full-header transparent-header dark ">
            <div id="header-wrap">
                <div class="container">
                    <div class="header-row">

                        <!-- Logo
                        ============================================= -->
                        <div id="logo">
                        
                            <a href="{{asset('/')}}" class="h1 d-none d-lg-block">Gabriel Manara</a>
                        
                        </div><!-- #logo end -->

                    

                        <div id="primary-menu-trigger">
                            <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                        </div>

                        <!-- Primary Navigation
                        ============================================= -->
                        <nav class="primary-menu">

                            <ul class="menu-container">
                                <li class="menu-item">
                                    <a class="menu-link" href="{{Request::url().'#'.__('sobre-mim')}}"><div>{{__('SOBRE MIM')}}</div></a>
                                   
                                </li>

                                <li class="menu-item">
                                    <a class="menu-link" href="{{Request::url().'#'.__('servicos')}}"><div>{{__('SERVIÇOS')}}</div></a>
                                   
                                </li>

                                
                                <li class="menu-item">
                                    <a class="menu-link" href="{{Request::url().'#'.__('portfolio')}}"><div>{{__('PORTFOLIO')}}</div></a>
                                   
                                </li>

                                <li class="menu-item">
                                    <a class="menu-link" href="{{Request::url().'#'.__('contato')}}"><div>{{__('CONTATO')}}</div></a>
                                   
                                </li>

                                
                               <!-- <li class="menu-item">
                                    <a class="menu-link" href="#contato"><div>BLOG</div></a>
                                   
                                </li> -->
                             
                            </ul>

                        </nav><!-- #primary-menu end -->

                        

                    </div>
                </div>
            </div>
            <div class="header-wrap-clone d-none"></div>
</header>

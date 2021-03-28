const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine(
        [
            'public/assets_site/css/bootstrap.css',
            'public/assets_site/css/style.css',
            'public/assets_site/css/dark.css',
            'public/assets_site/css/font-icons.css',
            'public/assets_site/css/animate.css',
            'public/assets_site/css/magnific-popup.css',
            'public/assets_site/css/style2.css',
            'public/assets_site/css/custom.css',
        
        ], 
        'public/css/app.css'
    );

mix.combine(
        [
            'public/assets_site/js/jquery.js',
            'public/assets_site/js/jquery.mask.min.js',
            'public/assets_site/js/plugins.min.js',
            'public/assets_site/js/functions.js',
            'public/assets_site/js/scripts.js',
        
        ], 
        'public/js/app.js'
    );

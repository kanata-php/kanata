let mix = require('laravel-mix');
require('mix-tailwindcss');

mix
    .js('resources/js/app.js', 'public/js')
    .css('resources/css/style.css', 'public/css').tailwind('./tailwind.config.js');
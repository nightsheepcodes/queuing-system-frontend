<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>IT Ops Queuing System</title>

        @vite('resources/js/app.js')
    </head>
    <body class="bg-[#007380] dark:bg-[#0a0a0a] text-[#1b1b18] flex items-center lg:justify-center min-h-screen flex-col">
        <div id="app" class="w-full bg-gradient-to-br from-[#003D5B]/15 to-[#003D5B]/75"></div>
    </body>
</html>

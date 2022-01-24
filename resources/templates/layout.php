<!doctype html>
<html>
<head>
    <title>{{ title }} - {{ site:name }}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="title" content="{{ title }}">
    <meta name="description" content="{{ description }}">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="text-gray-900 leading-normal font-sans bg-gray-100">
<div id="app">
    <header id="header">
        <div class="container mx-auto flex flex-row items-center justify-between border-b-2 border-gray-200 p-4 mb-6">
            <a href="/" class="block font-bold text-gray-700 hover:text-gray-700 text-xl">{{ site:name }}</a>

            <form class="md:w-1/2" action="/search/results">
                <input class="w-full p-2 border-2 rounded-lg bg-white shadow-md text-gray-700 font-normal focus:outline-none focus:font-semibold" type="text" name="q" placeholder="Search the docs">
            </form>

            <div class="flex flex-row items-center">
                <a class="w-5 mr-4" href="https://statamic.com/discord">
                    <img src="/img/discord.svg" alt="Discord">
                </a>
                <a class="w-5" href="https://github.com/doublethreedigital/docs-starter-kit">
                    <img src="/img/github.svg" alt="Github">
                </a>
            </div>
        </div>
    </header>

    <main class="container mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-1/3">
            <div class="px-2">
                <button class="w-full bg-gray-200 p-2 rounded-lg mb-2 text-center text-gray-800 font-semibold uppercase md:hidden" onclick="toggleNav()">
                    Toggle Navigation
                </button>
            </div>

            <div id="hamburger-menu" class="flex flex-col hidden md:block">
                {{ structure for='docs' }}
                <div id="{{ title | underscored }}" class="flex flex-col mb-6 p-2">
                    <h3 class="font-bold uppercase text-sm text-gray-600 mb-1">{{ title }}</h3>

                    <ul class="flex flex-col m-0 list-none">
                        {{ children }}
                        <li id="{{ title | underscored }}" class="hover:ml-2 mt-1 mb-1">
                            <a class="{{ if page:url === url }} text-yellow-500 font-semibold {{ else }} text-gray-900 {{ /if }} hover:text-yellow-500 text-md" href="{{ url }}">
                                {{ title }}
                            </a>
                        </li>
                        {{ /children }}
                    </ul>
                </div>
                {{ /structure }}
            </div>

            <div class="hidden md:flex flex-col text-xs my-4 p-2 text-gray-700">
                <a class="mb-1" href="https://statamic.com">Powered by Statamic</a>
            </div>
        </div>

        <div class="md:w-2/3 p-2 md:p-0">
            <article id="{{ slug }}" class="md:max-w-xl">
                <h2 id="page-title" class="text-2xl font-semibold"><?php echo $title ?? ''; ?></h2>
                <p id="page-subtitle" class="mt-1 text-gray-600">
                    {{ if description }}
                    {{ description }}
                    {{ else }}
                    Last updated on {{ updated_at }}.
                    {{ /if }}
                </p>

                <div class="border-b-2 border-gray-200 my-6"></div>

                <div id="markdown">
                    <?php echo $content ?? '' ?>
                </div>
            </article>
        </div>
    </main>
</div>

<script src="js/app.js"></script>
<script>
    // oh yeah, rollin' that custom js ✨
    function toggleNav() {
        var menu = document.getElementById('hamburger-menu');

        console.log(menu.classList.contains('hidden'));

        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }
</script>
</body>
</html>
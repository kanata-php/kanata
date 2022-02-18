<!doctype html>
<html>
<head>
    <title><?=APP_NAME?></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="title" content="<?=APP_NAME?>">
    <meta name="description" content="">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/fontawesome-all.min.css">
</head>
<body class="text-gray-900 leading-normal font-sans bg-gray-100">
<div id="app">
    <header id="header">
        <div class="container mx-auto flex flex-row items-center justify-between border-b-2 border-gray-200 p-4 mb-6">
            <a href="/" class="block font-bold text-gray-700 hover:text-gray-700 text-xl"><?=APP_NAME?></a>

            <form class="md:w-1/2" action="/search/results">
                <input class="w-full p-2 border-2 rounded-lg bg-white shadow-md text-gray-700 font-normal focus:outline-none focus:font-semibold" type="text" name="q" placeholder="Search the docs">
            </form>

            <div class="flex flex-row items-center">
                <a class="w-5" href="https://github.com/kanata-php/kanata">
                    <img src="vendors/icons-svg/github.svg"/>
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
                <?php foreach ($navigation_items as $item) { ?>
                    <div id="<?php echo slug($item['title']) ?? ''; ?>" class="flex flex-col mb-6 p-2">
                        <h3 class="font-bold uppercase text-sm text-gray-600 mb-1"><?php echo $item['title'] ?? ''; ?></h3>

                        <ul class="flex flex-col m-0 list-none">
                            <?php foreach ($item['children'] as $child) { ?>
                                <li id="<?php echo slug($child['title']) ?? ''; ?>" class="hover:ml-2 mt-1 mb-1">
                                    <a
                                        class="
                                            <?php echo $child['url'] ?? ''; ?>
                                            {{ if page:url === url }} text-yellow-500 font-semibold {{ else }} text-gray-900 {{ /if }} hover:text-yellow-500 text-md
                                        "
                                        href="<?php echo $child['url'] ?? ''; ?>"
                                    >
                                        <?php echo $child['title'] ?? ''; ?>
                                    </a>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                <?php } ?>
            </div>
        </div>

        <div class="md:w-2/3 p-2 md:p-0">
            <article id="<?php echo $slug ?? '' ?>" class="md:max-w-xl">
                <h2 id="page-title" class="text-2xl font-semibold"><?php echo $title ?? ''; ?></h2>
                <p id="page-subtitle" class="mt-1 text-gray-600">
                    <?php echo $description ?? ''; ?>
                    <?php echo $updated_at ? 'Last updated on ' . $updated_at : '' ?>
                </p>

                <div class="border-b-2 border-gray-200 my-6"></div>

                <div id="markdown">
                    <?=$this->section('content')?>
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
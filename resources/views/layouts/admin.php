<!doctype html>
<html class="h-full bg-gray-100">
<head>
    <title><?=APP_NAME?></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="title" content="<?=APP_NAME?>">
    <meta name="description" content="">

    <link rel="icon" href="/imgs/favicon.ico"/>

    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="h-full">

    <?php
    if (!isset($hide_top_bar) || !$hide_top_bar) {
        $this->insert('core::header', [
            'is_logged' => $is_logged,
        ]);
    }
    ?>

    <div class="min-h-full">
        <div class="py-10">
            <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">

                <?php
                if (!isset($hide_left_sidebar) || !$hide_left_sidebar) {
                    $this->insert('core::admin/parts/left-sidebar');
                }
                ?>

                <main
                    class="
                        <?php if (!isset($hide_left_sidebar) || !$hide_left_sidebar) {?>
                            lg:col-span-9 xl:col-span-9
                        <?php } else {?>
                            lg:col-span-12 xl:col-span-12
                        <?php }?>"
                >

                    <?=$this->section('content')?>

                </main>

            </div>
        </div>
    </div>

    <script src="/js/app.js"></script>
</body>
</html>

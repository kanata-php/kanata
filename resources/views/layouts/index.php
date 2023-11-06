<!doctype html>
<html>
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
<body class="text-gray-900 leading-normal font-sans bg-gray-100">

<?php $this->insert('core::header', []) ?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
        <?=$this->section('content')?>
    </div>
</div>

<script type="module" src="/js/app.js"></script>
</body>
</html>

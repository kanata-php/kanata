<?php



return function () {
    $container = container();
    $config = [];

    $baseDirectory = 'config';
    $configDirectory = base_path() . $baseDirectory;
    $directory = new RecursiveDirectoryIterator($configDirectory, FilesystemIterator::SKIP_DOTS);
    $iterator = new IteratorIterator($directory);

    foreach ($iterator as $info) {
        if (filetype($info->getPathname()) === 'dir') {
            continue;
        }

        $file = basename($info->getPathname());
        $fileName = str_replace('.php', '', $file);

        $content = require_once trailingslashit($baseDirectory) . basename($info->getPathname());
        $config[$fileName] = $content;
    }

    $container['config'] = $config;
};

<?php

namespace App\Models;

use function Symfony\Component\String\u;

class Plugin extends Model
{
    const TABLE_NAME = 'plugins';
    protected string $database = self::TABLE_NAME;

    public function __construct()
    {
        $this->name = self::TABLE_NAME;
        parent::__construct();
    }

    public function getClassName(): string
    {
        return ucfirst((string) u($this->directory_name)->camel());
    }

    /**
     * Plugin has a main file that has to be capital/camel case of the directory, or "index.php".
     *
     * @return ?string
     */
    public function getMainFile(): ?string
    {
        $pluginPath = trailingslashit($this->path);

        $mainFileFullPath = $pluginPath . $this->getClassName() . '.php';
        if (file_exists($mainFileFullPath)) {
            return $mainFileFullPath;
        }

        $indexFileFullPath = $pluginPath . 'index.php';
        if (file_exists($indexFileFullPath)) {
            return $indexFileFullPath;
        }

        return null;
    }
}

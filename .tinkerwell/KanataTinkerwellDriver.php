<?php

use Kanata\Services\Bootstrap;

class KanataTinkerwellDriver extends TinkerwellDriver
{
    /**
     * Determine if the driver can be used with the selected project path.
     * You most likely want to check the existence of project / framework specific files.
     *
     * @param  string $projectPath
     * @return  bool
     */
    public function canBootstrap($projectPath)
    {
        require_once $projectPath . '/vendor/autoload.php';
        return class_exists(\Kanata\Services\Bootstrap::class);
    }

    /**
     * Bootstrap the application so that any executed can access the application in your desired state.
     *
     * @param  string $projectPath
     */
    public function bootstrap($projectPath)
    {
        require_once $projectPath . '/vendor/autoload.php';
        define('ROOT_FOLDER', $projectPath);
        Bootstrap::bootstrapTinkerwell();
    }

    public function getAvailableVariables()
    {
        return get_defined_vars();
    }
}
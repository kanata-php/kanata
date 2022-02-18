<?php

namespace SamplePlugin;

use SamplePlugin as SamplePluginMain;

class Helpers
{
    /**
     * @param string $view
     * @param array $params
     * @return mixed
     */
    public static function viewRender(string $view, array $params)
    {
        return container()->{SamplePluginMain::VIEW_KEY}->render($view, $params);
    }
}
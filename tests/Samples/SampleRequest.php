<?php

namespace Tests\Samples;

use Slim\Psr7\Request;

class SampleRequest extends Request
{
    public bool $stageOne = false;

    public function stageOneAccomplished()
    {
        $this->stageOne = true;
    }
}
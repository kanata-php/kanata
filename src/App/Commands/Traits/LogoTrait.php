<?php

namespace App\Commands\Traits;

use Symfony\Component\Console\Formatter\OutputFormatterStyle;
use Symfony\Component\Console\Output\OutputInterface;

trait LogoTrait
{
    public function writeLogo(OutputInterface $output): void
    {
        $outputStyle = new OutputFormatterStyle('#fff', '#074f8d', ['bold']);
        $output->getFormatter()->setStyle('fire', $outputStyle);
        $logo = <<<KANATA
######################
Welcome to Kanata!
######################
KANATA;
        $output->writeln('<fire>' . $logo . '</>');
    }
}
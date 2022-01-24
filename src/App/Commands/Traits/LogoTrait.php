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
        $logo = <<<FZ
<fire>
  ________ ________
 |\  _____\\_____   \        #######################
 \ \  \__/ \|___/  /|       Welcome to Flight Zone!
  \ \   __\    /  / /       #######################
   \ \  \_|   /  /_/__
    \ \__\   |\________\
     \|__|    \|_______|

FZ;
        $output->writeln('<fire>' . $logo . '</>');
    }
}
<?php

namespace App\Commands;

use App\Commands\Traits\InfoTrait;
use App\Commands\Traits\LogoTrait;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class InfoCommand extends Command
{
    use InfoTrait, LogoTrait;

    protected static $defaultName = 'info';

    protected function configure(): void
    {
        $this->setHelp('This command gives you information about your Kanata Application.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->writeLogo($output);

        $this->printBasicInfo($output);

        return Command::SUCCESS;
    }
}
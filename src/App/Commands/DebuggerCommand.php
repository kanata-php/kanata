<?php

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Process\Process;

class DebuggerCommand extends Command
{
    protected static $defaultName = 'debug';

    protected function configure(): void
    {
        $this->setHelp('This command starts the debugger server.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $process = new Process([base_path() . 'vendor/bin/var-dump-server']);
        $process->setTimeout(null);
        $process->start();

        foreach ($process as $type => $data) {
            $output->writeln($data);
        }

        return Command::SUCCESS;
    }
}
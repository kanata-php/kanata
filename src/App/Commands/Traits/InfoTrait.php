<?php

namespace App\Commands\Traits;

use Symfony\Component\Console\Output\OutputInterface;

trait InfoTrait
{
    public function printBasicInfo(OutputInterface $output): void
    {
        $output->writeln('');
        $output->writeln('<options=bold>###################################</>');
        $output->writeln('<options=bold>How to:</>');
        $output->writeln('<options=bold>###################################</>');

        $output->writeln('');
        $output->writeln('<info>To start docker-compose environment, just run:</info> docker-compose up -d');
        $output->writeln('');

        $output->writeln('<options=bold>--- Supervisor HTTP ---</>');
        $output->writeln('<info>Supervisor Output is located at:</info> storage/logs/output.log');
        $output->writeln('<info>Supervisor Errors are located at:</info> storage/logs/error.log');

        $output->writeln('');

        $output->writeln('<options=bold>--- Supervisor WebSocket ---</>');
        $output->writeln('<info>Supervisor Output is located at:</info> storage/logs/ws-output.log');
        $output->writeln('<info>Supervisor Errors are located at:</info> storage/logs/ws-error.log');

        $output->writeln('');

        $output->writeln('<options=bold>--- Inotify ---</>');
        $output->writeln('<info>Inotify Output is located at:</info> storage/logs/inotify-output.log');
        $output->writeln('<info>Inotify Errors are located at:</info> storage/logs/inotify-error.log');

        $output->writeln('');
    }
}
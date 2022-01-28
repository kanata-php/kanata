<?php

namespace SamplePlugin\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use GuzzleHttp\Client;

class QuoteCommand extends Command
{
    protected static $defaultName = 'quote';

    protected function configure(): void
    {
        $this->setHelp('This command displays a quote.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $client = new Client();
        $res = $client->request('GET', 'https://quotes.rest/qod', [
            'headers' => ['Accept' => 'application/json'],
        ]);
        if ($res->getStatusCode() !== 200) {
            $output->writeln('<error>There was an error while trying to get a quote!</error>');
            return Command::FAILURE;
        }

        $data = json_decode($res->getBody(), true);
        $quote = current($data['contents']['quotes']);
        $output->writeln('"' . $quote['quote'] . '"');
        $output->writeln($quote['author']);

        return Command::SUCCESS;
    }
}

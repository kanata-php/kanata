<?php

use Symfony\Component\Console\Input\ArgvInput;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\ConsoleOutput;
use Symfony\Component\Console\Output\ConsoleOutputInterface;

/**
 * Here we deal with the console input for the http, websocket and queue processes.
 */

function get_output_instance(): ConsoleOutputInterface {
    return new ConsoleOutput;
}

function get_input_instance(ConsoleOutputInterface $output): InputInterface {
    global $argv;

    $definition = new InputDefinition([
        new InputOption(HTTP_PORT_PARAM, null, InputOption::VALUE_OPTIONAL, '', HTTP_SERVER_PORT),

        // websocket
        new InputOption(WEBSOCKET_CONSOLE_OPTION, null, InputOption::VALUE_NONE),
        new InputOption(WEBSOCKET_PORT_PARAM, null, InputOption::VALUE_OPTIONAL, '', WS_SERVER_PORT),

        // queues
        new InputOption(QUEUE_CONSOLE_OPTION, null, InputOption::VALUE_NONE),
        new InputOption(QUEUE_NAME_CONSOLE_OPTION, null, InputOption::VALUE_REQUIRED),
    ]);

    try {
        $input = new ArgvInput($argv, $definition);

        if ($input->getOption(QUEUE_CONSOLE_OPTION) && null === $input->getOption(QUEUE_NAME_CONSOLE_OPTION)) {
            throw new Exception('Queues must have queue-name option specified!');
        }

        if ($input->getOption('queue') && $input->getOption(WEBSOCKET_CONSOLE_OPTION)) {
            throw new Exception('A single execution can\'t have queues and websockets at the same time specified!');
        }
    } catch (Exception $e) {
        $output->writeln('');
        $output->writeln('<error>There was an error while starting application: ' . $e->getMessage() . '</error>');
        $output->writeln('');
        exit(1);
    }

    return $input;
}

return function () {
    $container = container();
    $output = get_output_instance();
    $container['output'] = $output;
    $container['input'] = get_input_instance($output);
};

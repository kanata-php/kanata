<?php

namespace App\Commands;

use App\Commands\Traits\InfoTrait;
use App\Commands\Traits\LogoTrait;
use App\Models\Plugin;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ActivatePluginCommand extends Command
{
    use LogoTrait;

    protected static $defaultName = 'plugin:activate';

    protected function configure(): void
    {
        $this
            ->setHelp('This command activates a plugin Kanata Application.')
            ->setDefinition(
                new InputDefinition([
                    new InputArgument('plugin-name', InputArgument::REQUIRED, 'Which plugin to activate (by directory name).'),
                ])
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->writeLogo($output);

        $pluginName = $input->getArgument('plugin-name');

        $plugin = Plugin::find($pluginName);

        if (null === $plugin) {
            $io->error('Plugin ' . $pluginName . ' was not found!');
            return Command::FAILURE;
        }

        if (!$plugin->update(['active' => true])) {
            $io->error('There was an error while trying to activate Plugin ' . $pluginName . '.');
            return Command::FAILURE;
        }

        $io->success('Plugin ' . $pluginName . ' activated!');
        return Command::SUCCESS;
    }
}
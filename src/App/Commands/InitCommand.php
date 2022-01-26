<?php

namespace App\Commands;

use App\Commands\Traits\InfoTrait;
use App\Commands\Traits\LogoTrait;
use League\Flysystem\Filesystem;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Formatter\OutputFormatterStyle;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use League\Flysystem\Adapter\Local;

class InitCommand extends Command
{
    use InfoTrait, LogoTrait;

    protected static $defaultName = 'init';

    protected Filesystem $filesystem;

    protected $storage_logs_dir = 'storage/logs';
    protected $storage_temp_dir = 'storage/temp';
    protected $env_file = '.env';
    protected $env_sample_file = '.env.sample';

    protected $permission_message = 'It might be due to permissions.';

    protected function configure(): void
    {
        $adapter = new Local(base_path());
        $this->filesystem = new Filesystem($adapter);

        $this->setHelp('This command allows you to initiate Kanata Application.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln([
            '<info>Checking for configurations...</info>',
        ]);

        $this->writeLogo($output);

        if (!$this->createStorageLogs($output)) {
            return Command::FAILURE;
        }

        if (!$this->createStorageTemp($output)) {
            return Command::FAILURE;
        }

        if (!$this->createEnvFile($output)) {
            return Command::FAILURE;
        }

        $this->printBasicInfo($output);

        return Command::SUCCESS;
    }

    /**
     * Create ./storage/logs directory.
     *
     * @param OutputInterface $output
     * @return bool
     */
    private function createStorageLogs(OutputInterface $output): bool
    {
        $storage_logs_dir = base_path() . $this->storage_logs_dir;

        if (!file_exists($storage_logs_dir)) {
            $output->writeln('No /storage/logs directory not found.');
            if (!mkdir($storage_logs_dir, 0755)) {
                $output->writeln('There was a problem creating the directory ' . $storage_logs_dir);
                $output->writeln('<error>' . $this->permission_message . '</error>');
                return false;
            }
            $output->writeln('<info>Directory created successfully: ' . $storage_logs_dir . '</info>');
        }

        return true;
    }

    /**
     * Create ./storage/temp directory.
     *
     * @param OutputInterface $output
     * @return bool
     */
    private function createStorageTemp(OutputInterface $output): bool
    {
        $storate_temp_dir = base_path() . $this->storage_temp_dir;

        if (!file_exists($storate_temp_dir)) {
            $output->writeln('No ./storage/temp directory not found.');
            if (!mkdir($storate_temp_dir, 0755)) {
                $output->writeln('There was a problem creating the directory ' . $storate_temp_dir);
                $output->writeln('<error>' . $this->permission_message . '</error>');
                return false;
            }
            $output->writeln('<info>Directory created successfully: ' . $storate_temp_dir . '</info>');
        }

        return true;
    }

    /**
     * Create ./env file.
     *
     * @param OutputInterface $output
     * @return bool
     */
    private function createEnvFile(OutputInterface $output): bool
    {
        $env_file = $this->env_file;
        $env_sample_file = $this->env_sample_file;

        if (!$this->filesystem->has($env_file) && !$this->filesystem->has($env_sample_file)) {
            $output->writeln('<error>.env.sample and .env files not present!</error>');
            return false;
        }

        if ($this->filesystem->has($env_file)) {
            return true;
        }

        if (!$this->filesystem->copy($env_sample_file, $env_file)) {
            $output->writeln('<error>.env.sample and .env files not present!</error>');
            return false;
        }

        $output->writeln('<info>Successfully created ./.env file!</info>');
        return true;
    }
}
<?php

namespace App\Repositories;

use App\Models\Plugin;
use App\Models\Traits\Validation;
use App\Repositories\Interfaces\Repository;
use Exception;
use Lazer\Classes\LazerException;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Required;
use Symfony\Component\Validator\Constraints\Type;
use Lazer\Classes\Database as Lazer;

class PluginRepository implements Repository
{
    use Validation;

    public array $errors = [];

    public array $defaultValues = [
        'active' => false,
    ];

    /**
     * @param string $procedure
     * @param array $data
     * @return void
     * @throws Exception
     */
    private function validate(string $procedure, array $data)
    {
        if (isset($data['name'])) {
            $this->validateField($data['name'], [new Type('string'), new NotBlank()]);
        }

        if ($procedure === 'create' || isset($data['directory_name'])) {
            $this->validateField($data['directory_name'], [new Required(), new Type('string'), new NotBlank()]);
        }

        if (isset($data['author_name'])) {
            $this->validateField($data['author_name'], [new Type('string'), new NotBlank()]);
        }

        if (isset($data['author_email'])) {
            $this->validateField($data['author_email'], [new Type('string'), new NotBlank()]);
        }

        if (isset($data['description'])) {
            $this->validateField($data['description'], [new Type('string'), new NotBlank()]);
        }

        if ($procedure === 'create' || isset($data['path'])) {
            $this->validateField($data['path'], [new Required(), new NotBlank()]);
        }
    }

    public function registerPlugin(array $data)
    {
        try {
            $this->validate('create', $data);
        } catch (Exception $e) {
            $this->errors = explode('|', $e->getMessage());
            return null;
        }

        /** @var Plugin $record */
        $record = Plugin::getInstance()->where('directory_name', '=', $data['directory_name'])->find();

        if (
            null !== $record
            && null !== $record['directory_name']
        ) {
            return $record;
        }

        if ($record->count() > 0) {
            $record->delete();
        }

        $data = $this->fillDefaults($data);

        return Plugin::createRecord($data);
    }

    public function fillDefaults(array $data): array
    {
        foreach ($this->defaultValues as $key => $value) {
            if (!isset($data[$key])) {
                $data[$key] = $value;
            }
        }
        return $data;
    }

    public function updatePlugin(string $id, array $data): bool
    {
        try {
            $this->validate('update', $data);
        } catch (Exception $e) {
            $this->errors = explode('|', $e->getMessage());
            return false;
        }

        try {
            $record = Plugin::getInstance()->find((int)$id);
        } catch (LazerException $e) {
            return false;
        }
        return $record->update($data);
    }

    public function registerIfNotRegistered(string $pluginPath): Lazer
    {
        $pluginDirectoryName = basename($pluginPath);
        $record = $this->registerPlugin([
            'name' => $pluginDirectoryName,
            'directory_name' => $pluginDirectoryName,
            'path' => $pluginPath,
        ]);

        if ($record->path !== $pluginPath) {
            $record->update([
                'path' => $pluginPath,
            ]);
        }

        return $record;
    }
}
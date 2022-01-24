<?php

namespace App\Repositories;

use App\Models\Model;
use App\Models\Plugin;
use App\Models\Traits\Validation;
use App\Repositories\Interfaces\Repository;
use Exception;
use PHPUnit\Framework\Constraint\StringContains;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Required;
use Symfony\Component\Validator\Constraints\Type;

class PluginRepository implements Repository
{
    use Validation;

    public array $errors = [];

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

        if ($procedure === 'create' || isset($data['directory-name'])) {
            $this->validateField($data['directory-name'], [new Required(), new Type('string'), new NotBlank()]);
        }

        if (isset($data['author-name'])) {
            $this->validateField($data['author-name'], [new Type('string'), new NotBlank()]);
        }

        if (isset($data['author-email'])) {
            $this->validateField($data['author-email'], [new Type('string'), new NotBlank()]);
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

        $record = Plugin::find($data['directory-name']);
        if (null !== $record) {
            return $record;
        }

        return Plugin::getInstance()->create($data);
    }

    public function updatePlugin(string $id, array $data): bool
    {
        try {
            $this->validate('update', $data);
        } catch (Exception $e) {
            $this->errors = explode('|', $e->getMessage());
            return false;
        }

        $record = Plugin::find($id);
        return $record->update($data);
    }

    public function registerIfNotRegistered(string $pluginPath): Model
    {
        $pluginDirectoryName = basename($pluginPath);
        $record = $this->registerPlugin([
            'id' => $pluginDirectoryName,
            'directory-name' => $pluginDirectoryName,
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
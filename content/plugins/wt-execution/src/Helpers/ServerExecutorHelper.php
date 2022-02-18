<?php

namespace WtExecution\Helpers;

class ServerExecutorHelper
{
    /**
     * @param string $code
     * @return string
     */
    public static function preparePHPCodeForTinker(string $code): string
    {
        $code = preg_replace('#/\*[^*]*\*+([^/][^*]*\*+)*/#', '', $code);
        
        // remove commented chunks = multi-line comments
        $code = explode("\n", $code);
        
        $code = self::processCode($code);
        
        $code = array_filter($code);
        $code = ' echo \'' . implode('', $code) . '\' ';
        
        return $code;
    }

    /**
     * @param string $code
     * @return string
     */
    public static function prepareShellScript(string $code): string
    {
        $code = preg_replace('#/\*[^*]*\*+([^/][^*]*\*+)*/#', '', $code);

        // remove commented chunks = multi-line comments
        $code = explode("\n", $code);

        $code = self::processCode($code);

        $code = array_filter($code);
        $code = implode('', $code);

        return $code;
    }

    /**
     * @param string $result
     * @return string
     */
    public static function parsePHPCodeResult(string $result): string
    {
        // expode into lines
        $result = explode("\n", $result);
        // remove empty lines
        $result      = array_filter($result);
        $resultArray = [];
        foreach ($result as $line) {
            $resultArray[] = $line;
        }
        // remove the last line
        if ($resultArray[ count($resultArray) - 1 ] === 'Exit:  Ctrl+D') {
            unset($resultArray[ count($resultArray) - 1 ]);
        }
        // remove the first line
        unset($resultArray[0]);

        $result = implode("\n", $resultArray);

        return $result;
    }

    /**
     * @param array $code
     * @return array
     */
    private static function processCode(array $code): array
    {
        // prepare code
        $PROTOCOL_PLACEHOLDER = 'PROTOCOL_PLACE_HOLDER';
        return array_map(function ($item) use ($PROTOCOL_PLACEHOLDER) {
            // avoid protocol problems
            $item = str_replace('://', $PROTOCOL_PLACEHOLDER, $item);

            // remove commented chunks - single line comments
            $item = explode('//', $item);

            // remove commented chunks = multi-line comments
            $item[0] = preg_replace('!/\*.*?\*/!s', '', $item[0]);

            // put back protocol
            $item[0] = str_replace($PROTOCOL_PLACEHOLDER, '://', $item[0]);

            // escape single quotes
            $item[0] = str_replace("'", "'\"'", $item[0]);

            // $item[0] = str_replace("\\", "'\\\\", $item[0]);
            $item[0] = str_replace("\\", "\\\\", $item[0]);

            return $item[0];
        }, $code);
    }
}

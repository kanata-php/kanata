import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, 'resources/js/app.js'),
                style: path.resolve(__dirname, 'resources/css/style.css'),
            },
            output: {
                dir: 'dist',
                entryFileNames: 'js/[name].js',
                assetFileNames: 'css/[name].[ext]',
            }
        },
    },

    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
})

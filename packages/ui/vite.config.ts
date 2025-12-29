import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.json',
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            // 1. 指定入口檔案
            entry: resolve(__dirname, 'src/index.ts'),
            // 2. 指定 Library 名稱
            name: 'ReactComponentLab',
            // 3. 輸出的檔案格式 (ES Module 和 CommonJS)
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            // 4. 【極重要】確保 React 不會被打包進去
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});

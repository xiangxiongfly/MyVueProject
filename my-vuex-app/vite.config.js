import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 配置路径别名
        alias: [{find: "@", replacement: resolve(__dirname, "src")}],
        // 配置省略后置
        extensions: ['.js', '.vue']
    }
});

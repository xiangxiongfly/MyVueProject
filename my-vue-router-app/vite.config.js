import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 配置别名
        alias: [
            // 别名@指向src目录
            {find: "@", replacement: resolve(__dirname, 'src')}
        ],
        // 配置可省略的后缀
        extensions: [".js", "ts", ".vue"]
    }
});

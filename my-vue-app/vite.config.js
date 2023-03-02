import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置中转服务器
  server: {
    proxy: {
      //通过代理实现跨域
      "/path": {
        target: "https://www.wanandroid.com", //替换的域名地址
        changeOrigin: true, //表示开启代理，允许跨域
        rewrite: (path) => path.replace(/^\/path/, ""), //重写路径，替换"/path"
      },
    },
  },
});

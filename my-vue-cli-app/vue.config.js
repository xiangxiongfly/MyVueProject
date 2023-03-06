const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      //通过代理实现跨域
      "/path": {
        target: "https://www.wanandroid.com", //替换的域名地址
        changeOrigin: true, //表示开启代理，允许跨域
        pathRewrite: {
          //重写路径，替换"/path"
          "^/path": "",
        },
      },
    },
  },
});

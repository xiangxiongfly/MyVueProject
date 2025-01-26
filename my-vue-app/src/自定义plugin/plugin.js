import {createApp} from "vue";
import "../style.css";
import App from "./plugin.vue";
import myPlugin from "./myPlugin/index.js";

const app = createApp(App);
// 安装插件
app.use(myPlugin, {
    small: 12,
    medium: 24,
    large: 36
});
app.mount("#app");

import {createApp} from "vue";
import "./assets/style.scss";
import App from "./App.vue";

// 引入Element-Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index.js";

// 安装ElementPlus框架
createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount("#app");

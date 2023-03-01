import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//引入
import router from "./router";

const app = createApp(App);
//支持路由
app.use(router);
//挂载
app.mount("#app");

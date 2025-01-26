import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
// 引入
import router from "./router";

const app = createApp(App);
// 使用路由
app.use(router);
app.mount("#app");

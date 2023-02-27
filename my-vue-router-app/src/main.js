import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//第五部：引入
import router from "./router";

//挂载
const app = createApp(App).use(router).mount("#app");

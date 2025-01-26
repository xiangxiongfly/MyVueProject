import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 安装持久化插件
app.use(pinia); // 使用Pinia
app.mount("#app");

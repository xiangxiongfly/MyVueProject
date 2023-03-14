import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);
//支持Pinia
app.use(createPinia());
app.mount("#app");

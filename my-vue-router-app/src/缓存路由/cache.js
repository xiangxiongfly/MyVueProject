import {createApp} from "vue";
import "../style.css";
import App from "./cache.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

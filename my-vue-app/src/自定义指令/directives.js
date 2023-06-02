import { createApp } from "vue";
import "../style.css";
import App from "./directives.vue";

const app = createApp(App);
// app.directive("focus", (el) => el.focus());
app.directive("pos", (el, binding) => {
  el.style[binding.arg] = binding.value + "px";
});
app.mount("#app");

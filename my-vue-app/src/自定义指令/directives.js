import {createApp} from "vue";
import "../style.css";
import App from "./directives.vue";

const app = createApp(App);

// 自定义指令
// 定义指令名：
app.directive("highlight", {
    mounted(el, binding) {
        console.log("binding:", binding);
        // 如果有delay修饰符，则设置delay值
        let delay = 0;
        if (binding.modifiers.delayed) {
            delay = 300;
            if (binding.value.delay) {
                delay = binding.value.delay;
            }
        }
        const mainColor = binding.value.mainColor;
        // 当参数为background，则操作背景色
        if (binding.arg === "background") {
            setTimeout(() => {
                if (binding.modifiers.blink) {
                    // 有blink修饰符，则实现闪缩效果
                    const interval = binding.value.interval;
                    const secondColor = binding.value.secondColor;
                    let currentColor = mainColor;
                    setInterval(() => {
                        currentColor = currentColor === secondColor ? mainColor : secondColor;
                        el.style.backgroundColor = currentColor;
                    }, interval);
                } else {
                    // 没有blink修饰符，则直接设置颜色
                    el.style.backgroundColor = mainColor;
                }
            }, delay);
        }
        // 当参数为空，则操作color
        else {
            setTimeout(() => {
                if (binding.modifiers.blink) {
                    // 有blink修饰符，则实现闪缩效果
                    const interval = binding.value.interval;
                    const secondColor = binding.value.secondColor;
                    let currentColor = mainColor;
                    setInterval(() => {
                        currentColor = currentColor === secondColor ? mainColor : secondColor;
                        el.style.color = currentColor;
                    }, interval);
                } else {
                    // 没有blink修饰符，则直接设置颜色
                    el.style.color = mainColor;
                }
            }, delay);
        }
    }
});

app.mount("#app");

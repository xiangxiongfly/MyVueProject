import Header from "../components/Header.vue";

// 对象方式：
// const myPlugin = {
//     install(app, options) {
//         // 配置全局方法
//         app.config.globalProperties.globalMethod = function (value) {
//             return value.toLowerCase();
//         };
//         // 注册公共组件
//         app.component("Header", Header);
//         // 注册公共指令
//         app.directive("upper", function (el, binding) {
//             // 通过指令参数判断调用插件的options
//             el.textContent = binding.value.toUpperCase();
//             if (binding.arg === "small") {
//                 el.style.fontSize = options.small + "px";
//             } else if (binding.arg === "medium") {
//                 el.style.fontSize = options.medium + "px";
//             } else {
//                 el.style.fontSize = options.large + "px";
//             }
//         });
//     }
// };

// 函数方式：
const myPlugin = function (app, options) {
    // 配置全局方法
    app.config.globalProperties.globalMethod = function (value) {
        // 转为小写
        return value.toLowerCase();
    };
    // 注册公共组件
    app.component("Header", Header);
    // 注册公共指令
    app.directive("upper", function (el, binding) {
        console.log("binding:", binding);
        // 转为大写
        el.textContent = binding.value.toUpperCase();
        if (binding.arg === "small") {
            el.style.fontSize = options.small + "px";
        } else if (binding.arg === "medium") {
            el.style.fontSize = options.medium + "px";
        } else {
            el.style.fontSize = options.large + "px";
        }
    });
};

export default myPlugin;
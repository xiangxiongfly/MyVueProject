import {createApp} from 'vue';
import './style.css';
import App from './App.vue';

// 引入Element-Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 安装ElementPlus框架
createApp(App).use(ElementPlus).mount('#app');
// createApp(App).mount('#app');

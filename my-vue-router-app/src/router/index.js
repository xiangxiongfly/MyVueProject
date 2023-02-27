import { createRouter, createWebHashHistory } from "vue-router";
//第一步：引入组件
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";

//第二步：定义路由表
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/User/:id", component: User },
];

//第三步：创建VueRouter实例
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
});

//第四部：导出
export default router;

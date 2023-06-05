import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

//引入组件
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Parent from "../views/Parent.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Page from "../views/Page.vue";
import Info from "../views/Info.vue";
import ShopTop from "../views/shop/ShopTop.vue";
import ShopMain from "../views/shop/ShopMain.vue";
import ShopFooter from "../views/shop/ShopFooter.vue";
import Sidebar from "../views/sidebar/Sidebar.vue";
import LeftSidebar from "../views/sidebar/LeftSidebar.vue";
import MainContent from "../views/sidebar/MainContent.vue";
import RightSidebar from "../views/sidebar/RightSidebar.vue";
// import User from "../views/User.vue";
const User = () => import("../views/User.vue");

//注册路由表
const routes = [
  //别名
  // { path: "/", name: "homePage", alias: "/home", component: Home },
  //多个别名
  { path: "/", name: "homePage", alias: ["/home", "/index"], component: Home },

  //动态路由：
  { path: "/about/name/:name/age/:age", name: "about", component: About },
  //动态路由：限制age为数字
  //   { path: "/about/name/:name/age/:age(\\d+)", component: About },
  //动态路由：限制age可传多个参数
  //   { path: "/about/name/:name/age/:age+", component: About },
  //动态路由：限制age可有可无
  //   { path: "/about/name/:name/age/:age*", component: About },

  //嵌套路由
  {
    path: "/parent",
    component: Parent,
    children: [
      { path: "one", component: One },
      { path: "two", component: Two },
    ],
  },

  //编程式路由
  { path: "/page", component: Page },
  { path: "/info", component: Info },

  //命名视图
  {
    path: "/shop",
    components: {
      ShopMain,
      ShopTop, //ShopTop:ShopTop的简写
      ShopFooter,
    },
  },
  //嵌套命名视图
  {
    path: "/sidebar",
    component: Sidebar,
    children: [
      {
        path: "info",
        components: { LeftSidebar, MainContent, RightSidebar },
      },
    ],
  },

  //props
  { path: "/user/:name/:age/:address", component: User, props: true },

  //重定向，方式一：字符串路径
  // { path: "/home", redirect: "/" },
  //重定向，方式二：路径对象
  // { path: "/home", redirect: { path: "/" } },
  //重定向，方式三：命名路由
  // { path: "/home", redirect: { name: "homePage" } },
  //重定向，方式四：方法
  // {
  //   path: "/home/:searchText",
  //   redirect: (to) => {
  //     return { path: "/home", query: { q: to.params.searchText } };
  //   },
  // },

  //配置404
  { path: "/:path(.*)", component: NotFound },
];

//创建Router实例，Hash模式
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

//HTML5模式
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//全局前置守卫
router.beforeEach((to, from) => {
  console.log("全局前置守卫");
  console.log(to);
  console.log(from);

  // return false;
});

export default router;

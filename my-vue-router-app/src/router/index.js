import {createRouter, createWebHistory,} from "vue-router";

import UserParams from "@/views/user/UserParams.vue";
import User from "@/views/user/User.vue";
import UserQuery from "@/views/user/UserQuery.vue";
import UserProps from "@/views/user/UserProps.vue";
import UserDetail from "@/views/user/UserDetail.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import News from "@/views/news/News.vue";
import NewsDetail from "@/views/news/NewsDetail.vue";
import MyAnimate from "@/views/MyAnimate.vue";
import Parent from "@/views/nest/Parent.vue";
import Page from "@/views/Page.vue";
import NotFound from "@/views/NotFound.vue";
import One from "@/views/nest/One.vue";
import Two from "@/views/nest/Two.vue";
import Home from "@/views/Home.vue";
import MyRouter from "@/views/MyRouter.vue";

//注册路由表
const routes = [
    // 别名
    // { path: "/", name: "homePage", alias: "/home", component: Home },
    // 多个别名
    // {path: "/", name: "homePage", alias: ["/home", "/index"], component: Home},

    {
        path: "/myrouter",
        component: MyRouter,
        beforeEnter: (to, from, next) => {
            console.log("独享守卫 beforeEnter", to, from);
            next();
        }
    },

    {
        path: "/myanimate",
        name: "myanimate",
        component: MyAnimate,
        meta: {
            enterActiveClass: "animate__bounceIn",
            leaveActiveClass: "animate__bounceOut",
        }
    },
    // 嵌套路由
    {
        path: "/parent",
        component: Parent,
        children: [
            {path: "", component: One}, // 默认显示
            {path: "one", component: One},
            {path: "two", component: Two},
        ],
    },

    // user模块
    {
        path: "/user",
        name: "user",
        component: User,
        children: [
            {path: "myparams/:name/:age/:sex", component: UserParams},
            {path: "myquery", component: UserQuery},
            {
                path: "myprops/:name/:age/:sex", component: UserProps,
                // 方式一：设置为true，只能映射params参数
                // props: true
                // 方式二：设置为对象，只能映射对象内的属性
                // props: {
                //     msg: "hello world"
                // }
                // 方式三：设置为函数，可以映射任意内容
                props: (route) => {
                    return {
                        name: route.params.name,
                        age: route.query.age,
                        sex: route.params.sex,
                        msg: "hello world"
                    };
                }
            },
            {
                name: "userDetail", // 命名路由
                path: "detail/:id",
                component: UserDetail,
                props: (route) => {
                    return {
                        id: route.params.id,
                        name: route.query.name,
                        age: route.query.age
                    };
                }
            }
        ]
    },

    // 命名视图
    {
        path: "/",
        components: {
            default: Home,
            "router-view-header": HomeHeader,
            "router-view-footer": HomeFooter,
        },
    },

    // 嵌套命名视图
    {
        path: "/news",
        component: News,
        children: [
            {
                path: "detail",
                components: {
                    default: NewsDetail,
                    HomeHeader,
                    HomeFooter
                },
            },
        ],
    },

    // 编程式路由
    {path: "/page", component: Page},

    // 重定向
    // 字符串路径
    // {
    //     path: "/redirect-to-user",
    //     redirect: "/user",
    // },
    // 路径对象
    // {
    //     path: "/redirect-to-user",
    //     redirect: {
    //         path: "/user",
    //     },
    // },
    // 命名路由
    {
        path: "/redirect-to-user",
        redirect: {
            name: "user",
        },
    },

    // 配置404
    {
        name: "404",
        path: "/404",
        component: NotFound,
    },
    {
        path: "/:notFound(.*)",
        redirect: "/404"
    },
];

//HTML5模式
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "global-active" // 全局配置激活样式
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("全局前置守卫：", to, from);
    next(); // 继续执行
});

// 全局解析守卫
router.beforeEach((to, from, next) => {
    console.log("全局解析守卫：", to, from);
    next();
});

// 全局后置守卫
router.afterEach((to, from, next) => {
    console.log("全局后置守卫：", to, from);
});


//全局前置守卫
//使用next
// router.beforeEach((to, from, next) => {
//   let isLogin = true;
//   if (to.name !== "login" && !isLogin) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

export default router;

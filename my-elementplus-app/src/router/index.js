import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            component: () => import("@/views/login/Login.vue"),
        },
        {
            path: "/register",
            component: () => import("@/views/register/Register.vue"),
        },
        {
            path: "/articles",
            component: () => import("@/views/articles/ArticleList.vue"),
        },
        {
            path: "/addarticle",
            component: () => import("@/views/public/AddArticle.vue"),
        },
        {
            path: "/submit",
            component: () => import("@/views/submit/Submit.vue"),
        }
    ]
});
export default router;
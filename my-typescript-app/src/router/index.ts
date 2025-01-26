import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import TodoList from "../views/TodoList/index.vue";
import UserSearch from "../views/UserSearch/index.vue";

// 路由表
const routes: RouteRecordRaw[] = [
    {
        name: "TodoList",
        path: "/todolist",
        component: TodoList
    },
    {
        name: "UserSearch",
        path: "/usersearch",
        component: UserSearch
    },
    {
        path: "/",
        redirect: "/todolist"
    }
]

// 路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
})

export default router
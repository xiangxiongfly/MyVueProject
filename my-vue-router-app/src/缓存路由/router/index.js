import {createRouter, createWebHistory,} from "vue-router";
import One from "@/缓存路由/views/One.vue";
import Three from "@/缓存路由/views/Three.vue";
import Two from "@/缓存路由/views/Two.vue";

const routes = [
    {
        path: "",
        component: One,
    },
    {
        path: "/one",
        component: One,
    }, {
        path: "/two",
        component: Two,
    }, {
        path: "/three",
        component: Three,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

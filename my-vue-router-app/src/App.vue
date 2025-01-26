<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
console.log(router);

const isHas = () => {
  console.log("是否包含：", router.hasRoute("about"));
};
const addRouter = () => {
  const About = () => import("@/views/About");
  router.addRoute({
    name: "about",
    path: "/about",
    component: About,
  });
};
const removeRouter = () => {
  router.removeRoute("about");
};
const queryRouter = () => {
  const routes = router.getRoutes();
  console.log("routes", routes);
};
</script>

<template>
  <h1>Hello 首页</h1>
  <div>
    <a href="/src/缓存路由/cache.html">
      <button>缓存路由</button>
    </a>
    <hr>
    <!-- 导航 -->
    <router-link to="/">切换Home页面</router-link>
    <!--    <br>-->
    <!--    <router-link to="/" custom v-slot="{navigate,isActive}">-->
    <!--      <button class="btn btn-secondary" :class="[isActive && 'global-active']" @click='navigate'>切换Home页面</button>-->
    <!--    </router-link>-->
    <!--    <br>-->
    <!--    <router-link :to="{ path: '/' }">通过path2跳转Home页面</router-link>-->
    <!--    <br>-->
    <!--    <router-link :to="{ name: 'homePage' }">通过name跳转Home页面</router-link>-->
    <!--    <br>-->
    <!--    <router-link to="/home">通过别名1跳转Home页面</router-link>-->
    <!--    <br>-->
    <!--    <router-link to="/index">通过别名2跳转Home页面</router-link>-->
    <!--    <br>-->
    <!--    <router-link to="/index" replace>替换Home页面</router-link>-->
    <!--    <br>-->
  </div>
  <p>
    <router-link to="/user">切换User页面</router-link>
  </p>
  <p>
    <!-- 嵌套路由 -->
    <router-link to="/parent">切换嵌套路由页面</router-link>
  </p>
  <p>
    <router-link to="/news/detail">切换news页面</router-link>
  </p>
  <p>
    <router-link to="/page">切换Page页面（编程式路由）</router-link>
  </p>
  <p>
    <router-link to="/redirect-to-user">重定向</router-link>
  </p>
  <p>
    <router-link to="/myanimate">过渡动画</router-link>
  </p>
  <p>
    <router-link to="/myrouter">MyRouter</router-link>
  </p>
  <div>
    <button @click="isHas">是否包含</button>
    <button @click="addRouter">动态添加路由</button>
    <button @click="removeRouter">动态删除路由</button>
    <button @click="queryRouter">查询路由</button>
    <router-link to="/about">切换About页面</router-link>
  </div>
  <hr>

  <!-- 占位符 -->
  <router-view name="router-view-header"/>

  <!--  路由过渡动画1 -->
  <!--  <router-view v-slot="{ Component }">-->
  <!--    <transition enter-active-class="animate__animated animate__bounceIn"-->
  <!--                leave-active-class="animate__animated animate__bounceOut">-->
  <!--      <component :is="Component"/>-->
  <!--    </transition>-->
  <!--  </router-view>-->

  <!--  路由过渡动画2 -->
  <!--  <router-view v-slot="{ Component,router}">-->
  <!--    <transition :enter-active-class="`animate__animated ${router.meta.enterActiveClass}`"-->
  <!--                :leave-active-class="`animate__animated  ${router.meta.leaveActiveClass}`">-->
  <!--      <component :is="Component"/>-->
  <!--    </transition>-->
  <!--  </router-view>-->

  <router-view/>
  <router-view name="router-view-footer"/>

</template>
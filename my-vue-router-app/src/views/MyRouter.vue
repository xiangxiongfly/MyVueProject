<script setup>
import {onBeforeRouteLeave, onBeforeRouteUpdate} from 'vue-router';

onBeforeRouteLeave((to, from, next) => {
  console.log("组件守卫 onBeforeRouteLeave", to, from);
  next();
});

onBeforeRouteUpdate((to, from) => {
  console.log("组件守卫 onBeforeRouteUpdate", to, from);
});
</script>

<template>
  <h2>我的路由守卫</h2>
</template>
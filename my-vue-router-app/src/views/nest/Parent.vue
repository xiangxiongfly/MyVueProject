<template>
  <div>
    <h2>嵌套路由</h2>
    <router-link to="/parent/one" class="btn"> 样式一</router-link>
    <router-link to="/parent/two" class="btn"> 样式二</router-link>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
</script>
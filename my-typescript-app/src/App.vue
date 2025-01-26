<script setup lang="ts">

</script>

<template>
  <div class="app">
    <div class="app-header">
      <h2>TodoList（ts+vue3+vue-router+pinia+axios）</h2>
    </div>
    <div class="app-body">
      <div class="app-left">
        <router-link class="left-link" to="/todolist">任务列表</router-link>
        <router-link class="left-link" to="/usersearch">用户搜索</router-link>
      </div>
      <div class="app-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  margin: 0 auto;
  width: 60%;
}

.app-header {
  padding: 15px;
  margin: 20px 0 20px;
  border-bottom: 1px solid #eee;
  background-color: #aaa;
}

.app-body {
  display: flex;
}

.app-left {
  flex: 1;
  margin-right: 10px;
}

.app-right {
  flex: 4;
}

.left-link {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.left-link:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

a.left-link {
  color: #333;
  text-decoration: none;
}

a.active {
  background-color: #aaa;
  border-color: #aaa;
}
</style>

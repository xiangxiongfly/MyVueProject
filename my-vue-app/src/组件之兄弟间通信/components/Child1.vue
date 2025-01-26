<script setup>
import emitter from "../services/emitter.js";

const increase = () => {
  // 发送事件
  emitter.emit('increase', 2);
};
</script>

<template>
  <div id="child1">
    <h3>子组件一</h3>
    <button @click="increase">increase</button>
  </div>
</template>

<style scoped>
div#child1 {
  border: 1px solid green;
  margin: 10px;
}
</style>
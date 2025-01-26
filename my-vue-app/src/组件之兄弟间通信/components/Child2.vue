<script setup>
import emitter from "../services/emitter.js";
import {onBeforeUnmount, onMounted, ref} from "vue";

const count = ref(0);
const increaseCallback = (num) => {
  count.value += num;
};

// 挂载
onMounted(() => {
  // 订阅事件
  emitter.on("increase", increaseCallback);
});

// 销毁前
onBeforeUnmount(() => {
  // 取消订阅
  emitter.off("increase", increaseCallback);
});
</script>

<template>
  <div id="child2">
    <h3>子组件二</h3>
    <p>count: {{ count }}</p>
  </div>
</template>

<style scoped>
div#child2 {
  border: 1px solid blue;
  margin: 10px;
}
</style>
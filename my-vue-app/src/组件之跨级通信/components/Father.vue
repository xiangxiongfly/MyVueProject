<script setup>
import Child from "./Child.vue";
import {provide, ref} from "vue";

// 响应式数据
const count = ref(0)
// 非响应式数据
const msg = "hello world"
// 方法
const increaseCount = () => {
  count.value++
}

provide("count", count)
provide("msg", msg)
provide("increaseCount", increaseCount)

</script>

<template>
  <div>
    <h2>父组件</h2>
    <p>msg: {{ msg }}</p>
    <p>count: {{ count }}</p>
    <Child/>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
}
</style>
<script setup>
import {ref} from "vue";

const count = ref(0)
const increaseCount = () => {
  count.value++
}
defineExpose({
  count, increaseCount
})

// 定义事件名
const emits = defineEmits(["invokeFatherMethod"])
const invokeFatherMethod = () => {
  // 发送自定义事件
  emits("invokeFatherMethod", 2)
}
</script>

<template>
  <div id="child">
    <h3>子组件</h3>
    <p>count: {{ count }}</p>
    <button @click="increaseCount">count++</button>
    <button @click="invokeFatherMethod">调用父组件方法1</button>
    <!--直接发送自定义事件-->
    <button @click="$emit('invokeFatherMethod',3)">调用父组件方法2</button>
  </div>
</template>

<style scoped>
div#child {
  border: 1px solid blue;
  margin: 10px;
}
</style>
<script setup>
import Child from "./Child.vue";
import {onMounted, ref} from "vue";

const childRef = ref(null)
const number = ref(0)

// 回调方法
const increaseNumber = (n) => {
  console.log("num", n)
  if (typeof n === "number") {
    number.value += n
  } else {
    number.value++
  }
}

onMounted(() => {
  // 访问子组件数据
  const count = childRef.value.count
  console.log("count", count)
})

// 调用子组件方法
const invokeChildMethod = () => {
  childRef.value.increaseCount()
}
</script>

<template>
  <div>
    <h2>父组件</h2>
    <p>number: {{ number }}</p>
    <button @click="increaseNumber">number++</button>
    <!--定义子组件引用，定义监听事件-->
    <Child ref="childRef" @invokeFatherMethod="increaseNumber"/>
    <button @click="invokeChildMethod">父调用子组件方法</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
}
</style>
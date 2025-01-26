<script setup>
import Child from "./Child.vue";
import {ref} from "vue";

const age = ref(18)

const handleClick = () => {
}
const handleChange = () => {
  console.log("handleChange")
}
</script>

<template>
  <div>
    <h2>父组件</h2>
    <Child name="小明" :age="age"
           msg="hello world" abc="ABC" style="color:red"
           @click="handleClick"
           @change="handleChange"/>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
}
</style>
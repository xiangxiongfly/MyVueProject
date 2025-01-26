<script setup>
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
</script>

<template>
  <div>
    <h2>父组件</h2>
    <Child1/>
    <Child2/>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
}
</style>
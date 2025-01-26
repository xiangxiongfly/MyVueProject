<script setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

console.log("生命周期钩子", "setup");

onBeforeMount(() => {
  console.log("生命周期钩子", "onBeforeMount");
})

onMounted(() => {
  console.log("生命周期钩子", "onMounted");
})

onBeforeUpdate(() => {
  console.log("生命周期钩子", "onBeforeUpdate");
})

onUpdated(() => {
  console.log("生命周期钩子", "onUpdated");
})

onBeforeUnmount(() => {
  console.log("生命周期钩子", "onBeforeUnmount");
})

onUnmounted(() => {
  console.log("生命周期钩子", "onUnmounted");
})
</script>

<template>
  <h1>生命周期</h1>
</template>
<script setup>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated
} from "vue";

onBeforeMount(() => {
  console.log("Comp3 onBeforeMount");
});
onMounted(() => {
  console.log("Comp3 onMounted");
});

onBeforeUpdate(() => {
  console.log("Comp3 onBeforeUpdate");
});

onUpdated(() => {
  console.log("Comp3 onUpdated");
});

onBeforeUnmount(() => {
  console.log("Comp3 onBeforeUnmount");
});

onUnmounted(() => {
  console.log("Comp3 onUnmounted");
});

onActivated(() => {
  console.log("Comp3 onActivated");
});

onDeactivated(() => {
  console.log("Comp3 onDeactivated");
});
</script>
<script>
export default {
  name: "Comp3"
};
</script>

<template>
  <h2>组件三</h2>
  <p>这是一些内容33333333</p>
</template>

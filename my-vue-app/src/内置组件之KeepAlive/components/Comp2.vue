<script setup>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated, ref
} from "vue";

onBeforeMount(() => {
  console.log("Comp2 onBeforeMount");
});
onMounted(() => {
  console.log("Comp2 onMounted");
});

onBeforeUpdate(() => {
  console.log("Comp2 onBeforeUpdate");
});

onUpdated(() => {
  console.log("Comp2 onUpdated");
});

onBeforeUnmount(() => {
  console.log("Comp2 onBeforeUnmount");
});

onUnmounted(() => {
  console.log("Comp2 onUnmounted");
});

onActivated(() => {
  console.log("Comp2 onActivated");
});

onDeactivated(() => {
  console.log("Comp2 onDeactivated");
});
const num = ref(0);
const increase = () => {
  num.value++;
};
</script>
<script>
export default {
  name: "Comp2"
};
</script>

<template>
  <h2>组件二</h2>
  <p>这是一些内容222222</p>
  <p>num: {{ num }}</p>
  <button @click="increase">num++</button>
</template>

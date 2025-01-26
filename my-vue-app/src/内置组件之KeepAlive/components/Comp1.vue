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
  console.log("Comp1 onBeforeMount");
});
onMounted(() => {
  console.log("Comp1 onMounted");
});

onBeforeUpdate(() => {
  console.log("Comp1 onBeforeUpdate");
});

onUpdated(() => {
  console.log("Comp1 onUpdated");
});

onBeforeUnmount(() => {
  console.log("Comp1 onBeforeUnmount");
});

onUnmounted(() => {
  console.log("Comp1 onUnmounted");
});

onActivated(() => {
  console.log("Comp1 onActivated");
});

onDeactivated(() => {
  console.log("Comp1 onDeactivated");
});

const count = ref(0);
const increase = () => {
  count.value++;
};
</script>
<script>
export default {
  name: "Comp1"
};
</script>

<template>
  <h2>组件一</h2>
  <p>这是一些内容1111111</p>
  <p>count: {{ count }}</p>
  <button @click="increase">count++</button>
</template>

<script setup>
import {useCounterStore} from "@/stores/counter.js";

const counterStore = useCounterStore();
const increase = () => {
  counterStore.increase(1);
};
const decrease = () => {
  counterStore.decrease(1);
};
const increaseAsync = () => {
  counterStore.increaseAsync(1);
};
</script>

<template>
  <div>
    <h2>CountUpdate</h2>
    <button @click="increase">count++</button>
    <button @click="decrease">count--</button>
    <button @click="increaseAsync">count++(异步执行)</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid blue;
  margin: 10px;
}
</style>
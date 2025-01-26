<script setup>
import {useStore} from "vuex";

const store = useStore();
const increase = () => {
  store.commit("increase", 1);
};
const decrease = () => {
  store.commit("decrease", 1);
};
const increaseAsync = () => {
  store.dispatch("increaseAsync", 2);
};
const decreaseAsync = () => {
  store.dispatch("decreaseAsync", 2);
};
</script>

<template>
  <div>
    <h2>CountUpdate</h2>
    <button @click="increase">count++</button>
    <button @click="decrease">count--</button>
    <br>
    <button @click="increaseAsync">count+2(异步执行)</button>
    <button @click="decreaseAsync">count-2(异步执行)</button>
  </div>
</template>

<style scoped>
div {
  margin: 10px;
  border: 1px solid red;
}

button {
  margin: 5px;
}
</style>
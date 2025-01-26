<script setup>
import {useStore} from "vuex";

const store = useStore();
console.log("store:", store);
</script>

<template>
  <div>
    <h2>CountShow</h2>
    <p>count: {{ store.state.count }}</p>
    <p>奇数或偶数：{{ store.getters.addOrEven }}</p>
  </div>
</template>

<style scoped>
div {
  margin: 10px;
  border: 1px solid blue;
}
</style>
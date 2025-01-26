<script setup>
import useCounterStore from '@/stores/counter.js';

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h2>CountShow</h2>
    <p>count: {{ counterStore.count }}</p>
    <p>奇数还是偶数：{{ counterStore.oddOrEven }}</p>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
  margin: 10px;
}
</style>
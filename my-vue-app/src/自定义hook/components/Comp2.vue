<script setup>
import countHook from '../hooks/countHook.js';

const {msg, count, doubleCount, increase} = countHook();
</script>

<template>
  <p>Comp2</p>
  <p>msg: {{ msg }}</p>
  <p>count: {{ count }}</p>
  <p>doubleCount: {{ doubleCount }}</p>
  <button @click="increase">increase</button>
</template>

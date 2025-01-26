<script setup>
import {ref} from "vue";

const count = ref(0);
const increase = () => {
  count.value++;
};
</script>

<template>
  <h2>One</h2>
  <p>count: {{ count }}</p>
  <button @click="increase">count++</button>
</template>
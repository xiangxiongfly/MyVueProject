<script setup>
const props = defineProps(["name", "age", "sex", "msg"]);
</script>

<template>
  <h3>用户详情3</h3>
  <p>name: {{ name }}</p>
  <p>age: {{ age }}</p>
  <p>sex: {{ sex }}</p>
  <p>msg: {{ msg }}</p>
</template>
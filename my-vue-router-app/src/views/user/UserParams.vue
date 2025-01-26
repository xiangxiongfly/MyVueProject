<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
console.log("router:", route);
console.log("router.params:", route.params); // {name: 'tom', age: '18', sex: 'true'}
</script>

<template>
  <h3>用户详情1</h3>
  <p>name: {{ $route.params.name }}</p>
  <p>age: {{ $route.params.age }}</p>
  <p>sex: {{ $route.params.sex }}</p>
</template>
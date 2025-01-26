<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
console.log("router:", route);
console.log("router.query:", route.query); // {name: 'jake', age: '28', sex: 'false'}
</script>

<template>
  <h3>用户详情2</h3>
  <p>name: {{ $route.query.name }}</p>
  <p>age: {{ $route.query.age }}</p>
  <p>sex: {{ $route.query.sex }}</p>
</template>
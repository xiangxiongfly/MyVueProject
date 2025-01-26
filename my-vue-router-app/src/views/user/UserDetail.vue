<script setup>
defineProps(["id", "name", "age"]);
</script>

<template>
  <h3>UserDetail</h3>
  <p>id: {{ id }}</p>
  <p>name: {{ name }}</p>
  <p>age: {{ age }}</p>
</template>
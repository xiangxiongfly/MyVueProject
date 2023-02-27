<script setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
    console.log("home onMounted");
});
onUnmounted(() => {
    console.log("home onUnmounted");
});
</script>
<template>
    <p>home</p>
</template>
<!-- <script>
export default {
    beforeCreate() {
        console.log("生命周期选项", "beforeCreate");
    },
    created() {
        console.log("生命周期选项", "created");
    },
    beforeMount() {
        console.log("生命周期选项", "beforeMount");
    },
    mounted() {
        console.log("生命周期选项", "mounted");
    },
    updated() {
        console.log("生命周期选项", "updated");
    },
    beforeUnmount() {
        console.log("生命周期选项", "beforeUnmount");
    },
    unmounted() {
        console.log("生命周期选项", "unmounted");
    }
}
</script> -->

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

console.log("生命周期钩子", "setup");

onBeforeMount(() => {
    console.log("生命周期钩子", "onBeforeMount");
})

onMounted(() => {
    console.log("生命周期钩子", "onMounted");
})

onBeforeUpdate(() => {
    console.log("生命周期钩子", "onBeforeUpdate");
})

onUpdated(() => {
    console.log("生命周期钩子", "onUpdated");
})

onBeforeUnmount(() => {
    console.log("生命周期钩子", "onBeforeUnmount");
})

onUnmounted(() => {
    console.log("生命周期钩子", "onUnmounted");
})
</script>

<template>
    <h1>生命周期</h1>
</template>
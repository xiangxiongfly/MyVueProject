<script >
export default {
    data() {
        return {
            count: 0
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");

    },
    unmounted() {
        console.log("unmounted");
    }
}
</script>

<template>
    <p>{{ count }}</p>
    <button @click="count++">count++</button>
</template>

<style></style>

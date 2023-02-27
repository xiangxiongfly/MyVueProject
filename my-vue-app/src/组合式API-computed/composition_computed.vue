<script >
import { ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
export default {
    setup() {
        const msg = ref("hello");
        //计算属性
        const reverseMsg = computed(() => {
            return msg.value.split("").reverse().join("");
        });
        onBeforeMount(() => {
            console.log("onBeforeMount");
        });
        onMounted(() => {
            console.log("onMounted");
        });
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        });
        onUpdated(() => {
            console.log("onUpdated");
        });
        return { msg, reverseMsg };
    }
}
</script>

<template>
    <p> {{ msg }}</p>
    <p> {{ reverseMsg }}</p>
</template>

<style></style>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  setup(props, context) {
    console.log("this", this) // undefined
    const message = ref("hello world")
    const pRef = ref(null)

    onBeforeMount(() => {
      console.log("生命周期钩子", "onBeforeMount");
      console.log("message:", message.value)
    })

    onMounted(() => {
      console.log("生命周期钩子", "onMounted");
      console.log("pRef:", pRef.value)
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

    return {message, pRef}
  }
}

</script>

<template>
  <h1>生命周期</h1>
  <p ref="pRef">{{ message }}</p>
  <button @click="message='欢迎'">修改message</button>
</template>
<script>
export default {
  data() {
    return {
      message: "hello world"
    }
  },
  beforeCreate() {
    console.log("生命周期选项", "beforeCreate");
    console.log("this:", this) // 可以输出
  },
  created() {
    console.log("生命周期选项", "created");
    console.log(`message:${this.message}`) // 可以输出
  },
  beforeMount() {
    console.log("生命周期选项", "beforeMount");
  },
  mounted() {
    console.log("生命周期选项", "mounted");
    console.log(`pRef:${this.$refs.pRef}`) // 可以输出
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
</script>

<template>
  <h1>生命周期</h1>
  <p ref="pRef">{{ message }}</p>
  <button @click="message='欢迎'">修改message</button>
</template>
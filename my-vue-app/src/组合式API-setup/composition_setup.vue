<script setup>
import { ref } from "vue"
//引入组件，不需要注册
import Content from "../components/Content.vue"
//定义变量，不需要导出暴露
const name = "张三";
const age = 18;
const count = ref(10);
function add() {
    count.value++;
}
</script>

<template>
    <Content></Content>
    <p>姓名：{{ name }} 年龄：{{ age }}</p>
    <p>{{ count }}</p>
    <button @click="add">count++</button>
</template>

<style></style>

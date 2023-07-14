<script setup>
import { inject } from 'vue';

const name = inject("name")
const age = inject("age")
const address = inject("address")
const userInfo = inject("userInfo")
const message = inject("message")
const changeFatherMethod = inject("changeFatherMethod")
</script>

<template>
    <h2>孙子组件</h2>
    <p>{{ name }}-{{ age }}-{{ address }}</p>
    <p>{{ userInfo }}</p>
    <p>{{ message }}</p>
    <button @click="changeFatherMethod">调用顶层方法</button>
</template>
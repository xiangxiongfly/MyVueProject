<script setup>
import { ref } from "vue";
import Child2 from "./Child2.vue"

let message = ref("hello")
const list = ref(["北京", "上海", "广州"])
let childMsg = ref("")

// 接收数据
function receiveChildMsg(value) {
    childMsg.value = value
}
</script>

<template>
    <h2>父组件</h2>
    <!-- 第四步：监听事件，回调receiveChildMsg方法 -->
    <Child2 abc="ABC" :message="message" :list="list" @onReceive="receiveChildMsg"></Child2>
    <p>接收子组件数据：{{ childMsg }}</p>
</template>

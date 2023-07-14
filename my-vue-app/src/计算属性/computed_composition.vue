<script setup>
import { ref, reactive, computed } from 'vue'

let message = ref("hello world")
let name = ref("小明")
let age = ref(18)

function reverseMethod() {
    console.log("reverseMethod")
    return message.value.split("").reverse().join("")
}

function changeUserInfo() {
    userInfo.value = "小花 28"
}

// 计算属性
const reverseComputed = computed(() => {
    console.log("reverseComputed")
    return message.value.split("").reverse().join("")

})

// 可写计算属性
let userInfo = computed({
    // getter
    get() {
        return name.value + "-" + age.value
    },
    // setter
    set(newValue) {
        [name.value, age.value] = newValue.split(" ")
    }
})
</script>

<template>
    <h1>计算属性(Options)</h1>
    <p>原始值：{{ message }}</p>
    <p>第一次调用方法：{{ reverseMethod() }}</p>
    <p>第二次调用方法：{{ reverseMethod() }}</p>
    <p>第一次调用计算属性：{{ reverseComputed }}</p>
    <p>第二次调用计算属性：{{ reverseComputed }}</p>
    <button @click="message = '你好'">修改message</button>
    <p>{{ userInfo }}</p>
    <button @click="changeUserInfo">修改userInfo</button>
</template>
<script setup>
import { provide, ref, reactive } from "vue";
import Child2 from "./Child2.vue"

const name = ref("小白")
const age = ref(18)
const address = ref("北京市")
const userInfo = reactive({
    name: "小红",
    age: 1
})
const message = ref("hello")


function changeData() {
    name.value = "小黑"
    age.value = 28
    address.value = "上海市"
    userInfo.name = "小红2222"
    userInfo.age = "2"
    message.value = "哈喽！"
}

function changeFatherMethod() {
    name.value = "小红"
}

provide("name", name)
provide("age", age)
provide("address", address)
provide("userInfo", userInfo)
provide("message", message)
provide("changeFatherMethod", changeFatherMethod)
</script>

<template>
    <h2>父组件</h2>
    <p>{{ name }}-{{ age }}-{{ address }}</p>
    <p>{{ userInfo }}</p>
    <p>{{ message }}</p>
    <button @click="changeData">修改数据</button>
    <Child2></Child2>
</template>
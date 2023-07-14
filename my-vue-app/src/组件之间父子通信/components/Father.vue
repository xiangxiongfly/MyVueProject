<script>
import Child from "./Child.vue"

export default {
    data() {
        return {
            message: "hello",
            list: ["北京", "上海", "广州"],
            childMsg: ""
        }
    },
    methods: {
        changeMessage() {
            this.message = "你好"
        },
        // 第四步：接收数据
        receiveChildMsg(value) {
            this.childMsg = value
        }
    },
    components: {
        Child
    }
}
</script>

<template>
    <h2>父组件</h2>
    <button @click="changeMessage">修改message</button>
    <!-- 第三步：监听事件，回调receiveChildMsg方法 -->
    <Child abc="ABC" :message="message" :list="list" @onReceive="receiveChildMsg"></Child>
    <p>接收子组件数据：{{ childMsg }}</p>
</template>

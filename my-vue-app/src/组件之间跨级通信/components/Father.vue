<script>
import { computed } from "vue"
import Child from "./Child.vue"
export default {
    data() {
        return {
            name: "小白",
            age: 18,
            address: "北京市",
            userInfo: {
                name: "小红",
                age: 1
            },
            message: "hello",
        }
    },
    methods: {
        changeData: function () {
            this.name = "小黑"
            this.age = 28
            this.address = "上海市"
            this.userInfo.name = "小红2222"
            this.userInfo.age = "2"
            this.message = "哈喽！"
        },
        changeFatherMethod: function () {
            this.name = "小绿"
        }
    },
    provide() {
        return {
            name: this.name, //不支持响应式
            age: this.age, //不支持响应式
            address: this.address,//不支持响应式
            userInfo: this.userInfo, //支持响应式，浅拷贝
            message: computed(() => this.message), //支持响应式，使用计算属性
            changeFatherMethod: this.changeFatherMethod
        }
    },
    components: {
        Child,
    }
}
</script>

<template>
    <h2>父组件</h2>
    <p>{{ name }}-{{ age }}-{{ address }}</p>
    <p>{{ userInfo }}</p>
    <p>{{ message }}</p>
    <button @click="changeData">修改数据</button>
    <Child></Child>
</template>
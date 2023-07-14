<script >
export default {
    data() {
        return {
            message: "hello world",
            name: "小明",
            age: 18
        }
    },
    //方法
    methods: {
        reverseMethod() {
            console.log("reverseMethod");
            return this.message.split("").reverse().join("");
        },
        changeUserInfo() {
            this.userInfo = "小花 28"
        }
    },
    //计算属性
    computed: {
        reverseComputed() {
            console.log("reverseComputed");
            return this.message.split("").reverse().join("");
        },
        // 可写计算属性
        userInfo: {
            // getter
            get() {
                return this.name + "-" + this.age;
            },
            // setter
            set(newValue) {
                [this.name, this.age] = newValue.split(" ");
            }
        }
    }
}
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
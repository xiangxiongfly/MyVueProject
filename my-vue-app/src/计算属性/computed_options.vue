<script>
export default {
    data() {
        return {
            message: "hello world",
            user: {
                name: "小明",
                age: 18
            }
        }
    },
    //方法
    methods: {
        reverseMethod() {
            console.log("调用方法");
            return this.message.split("").reverse().join("");
        },
        changeUser() {
            this.userInfo = { name: "小白", age: 28 }
        }
    },
    //计算属性
    computed: {
        // 方式一：
        reverseComputed() {
            console.log("调用计算属性");
            return this.message.split("").reverse().join("");
        },
        // 方式二：
        userInfo: {
            // getter
            get() {
                console.log("userInfo get");
                return this.user.name + "-" + this.user.age;
            },
            // setter
            set(newValue) {
                console.log("userInfo set");
                const { name, age } = newValue;
                this.user.name = name
                this.user.age = age
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
    <button @click="changeUser">修改userInfo</button>
</template>
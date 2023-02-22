<script >
export default {
    data() {
        return {
            message: "hello world",
            firstMsg: "abc",
            lastMsg: "efg"
        }
    },
    //方法
    methods: {
        reverseMsg2() {
            console.log("reverseMsg2");
            return this.message.split("").reverse().join("");
        }
    },
    //计算属性
    computed: {
        reverseMsg() {
            console.log("reverseMsg");
            return this.message.split("").reverse().join("");
        },
        // 可写计算属性
        fullName: {
            // getter
            get() {
                return this.firstMsg + "-" + this.lastMsg;
            },
            // setter
            set(newValue) {
                [this.firstMsg, this.lastMsg] = newValue.split(" ");
            }
        }
    }
}
</script>

<template>
    <p>{{ message }}</p>
    <p>{{ reverseMsg2() }}</p>
    <p>{{ reverseMsg2() }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <button @click="message = '你好'">修改message</button>
    <p>{{ fullName }}</p>
    <p>{{ fullName="ABC EFG" }}</p>
</template>

<style></style>

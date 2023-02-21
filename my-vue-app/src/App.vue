<script >
export default {
    data() {
        return {
            message: "hello world",
            num: 0
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
        reverseMsg3: {
            get() {
                console.log("reverseMsg3");
                return this.message.split("").reverse().join("");
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
    <p>{{ reverseMsg3 }}</p>
    <button @click="message = '你好'">修改message</button>
</template>

<style></style>

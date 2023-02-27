<script >
import { ref, reactive, toRefs } from 'vue'
export default {
    // 组合式API，将同一逻辑关联在一起
    setup() {
        // 在组件创建前调用
        console.log("setup");
        console.log(this); //undefined，this不会指向应用实例

        let msg = "hello"; //不是响应式
        function changeMsg() {
            msg = "你好";
        }

        let message = ref("hello2"); //响应式，基本数据类型需要使用`ref`
        function changeMessage() {
            message.value = "你好2";
        }

        const obj = reactive({ //响应式，引用数据类型需要使用`reactive`
            name: "小明",
            age: 18
        });
        function changeObjName() {
            obj.name = "xiaoming";
        }

        const user = reactive({
            name: "小花",
            age: 40,
            child: {
                name: "小白"
            }
        });
        function changeChildName() {
            user.child.name = "aaaaaaaaaaa";
        }

        const student = reactive({
            name: '张三',
            age: 15,
            contact: {
                qq: '103422412'
            }
        });

        return { msg, changeMsg, message, changeMessage, obj, changeObjName, ...user, changeChildName, };
    }
}
</script>

<template>
    <p> {{ msg }}</p>
    <button @click="changeMsg()">改变msg</button>
    <p> {{ message }}</p>
    <button @click="changeMessage()">改变message</button>
    <p>{{ obj.name }}</p>
    <button @click="changeObjName()">改变obj.name</button>
    <p>{{ child.name }}</p>
    <button @click="changeChildName()">改变child.name</button>
</template>

<style></style>

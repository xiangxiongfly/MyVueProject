<script>
import Child from "./Child.vue"
import { ref, provide } from "vue"
export default {
    setup() {
        provide("name", "小花");
        const userName = ref("张三"); //响应式
        function changeUserName() {
            userName.value = "李四";
        }
        provide("userName", userName);
        return { changeUserName };
    },
    components: {
        Child
    }
}
</script>
<template>
    <h2>组合式API-父组件</h2>
    <Child></Child>
    <button @click="changeUserName">修改userName</button>
</template>
<script >
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
    setup() {
        const count = ref(0);
        function changeCount() {
            count.value++;
        }
        const user = reactive({
            name: "Tom",
            age: 18
        });
        function changeUserName() {
            user.name = "Jake";
        }

        //侦听器，基本数据类型
        watch(count, (newValue, oldValue) => {
            console.log("count", "新值：" + newValue + "  旧值：" + oldValue);
        });
        //侦听器，对象的属性
        watchEffect(() => {
            console.log(user.name);
        });
        return { count, user, changeCount, changeUserName };
    }
}
</script>

<template>
    <p>{{ count }}</p>
    <button @click="changeCount">改变count</button>
    <p>{{ user.name }}</p>
    <button @click="changeUserName">改变user.name</button>
</template>

<style></style>

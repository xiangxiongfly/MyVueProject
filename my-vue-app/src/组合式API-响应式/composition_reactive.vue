<script >
import { ref, reactive, toRefs, toRef } from 'vue'
export default {
    // 组合式API，将同一逻辑关联在一起
    // setup在created之前调用，也就是实例被完全初始化之前
    setup() {
        console.log("setup");
        console.log(this); //undefined，this不会指向应用实例

        //不是响应式
        let message1 = "hello";
        function changeMessage1() {
            message1 = "你好";
        }

        // ref
        //响应式：基本数据类型需要使用`ref`
        const count = ref(100);
        function changeCount() {
            count.value = 200;
        }

        // reactive & toRefs
        // 响应式：引用数据类型需要使用`reactive`
        const user = reactive({ name1: "小明", age1: 36 });
        // 解构后仍然具有响应式
        const { name1, age1 } = toRefs(user);
        function changeUser() {
            name1.value = "小白";
            age1.value = 18;
        }
        function changeUser2() {
            user.name1 = "小黑";
            user.age1 = "28;"
        }

        // reactive & toRef
        const student = reactive({ name2: "小明", age2: 36 });
        // 解构
        const age = toRef(student, "age2");
        function changeAge() {
            age.value = 666;
        }

        return { message1, changeMessage1, count, changeCount, name1, age1, changeUser, changeUser2, age, changeAge };
    }
}
</script>

<template>
    <div>
        <p>{{ message1 }}</p>
        <button @click="changeMessage1">修改message1</button>
    </div>
    <hr>
    <div>
        <p>{{ count }}</p>
        <button @click="changeCount">修改count</button>
    </div>
    <hr>
    <div>
        <p>{{ name1 }} - {{ age1 }}</p>
        <button @click="changeUser">修改user</button>
        <button @click="changeUser2">修改user2</button>
    </div>
    <hr>
    <div>
        <p>{{ age }}</p>
        <button @click="changeAge">修改age</button>
    </div>
</template>
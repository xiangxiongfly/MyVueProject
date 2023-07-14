<script >
export default {
    data() {
        return {
            msg: "hello",
            message: "hello world",
            isHidden: true,
            user: {
                name: "小明",
                age: 18,
                sex: true
            }
        }
    },
    // 侦听器
    watch: {
        // 方式一：msg变化时调用
        msg(newValue, oldValue) {
            console.log("新值：" + newValue, "旧值：" + oldValue);
        },
        // 方式二：立即调用
        message: {
            handler(newValue, oldValue) {
                if (newValue.length < 5 || newValue.length > 10) {
                    this.isHidden = false;
                } else {
                    this.isHidden = true;
                }
            },
            immediate: true // 是否立即调用
        },
        // 方式三：深度监听，监听对象的每个属性
        user: {
            handler(newValue) {
                console.log(newValue);
            },
            deep: true // 是否深度监听
        },
        // 方式四：监听指定属性
        "user.name": {
            handler(newValue) {
                console.log("user.name的新值：", newValue);
            }
        }
    }
}
</script>

<template>
    <h1>侦听器(Options)</h1>
    <p>{{ msg }}</p>
    <button @click="msg = '你好'">修改msg</button>
    <p>{{ message }}</p>
    <input type="text" v-model="message"><br>
    <p :hidden="isHidden">输入框中的内容不能小于5或大于10</p>
    <p>{{ user }}</p>
    <button @click="user.name = '小白'">修改user.name</button>
    <button @click="user.age = 28">修改user.age</button>
</template>
<script >
export default {
    data() {
        return {
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
        // 侦听器，方式一，message发生变化时调用
        // message(newValue, oldValue) {
        //     console.log("新值：" + newValue, "旧值：" + oldValue);
        //     if (newValue.length < 5 || newValue.length > 10) {
        //         this.isHidden = false;
        //     } else {
        //         this.isHidden = true;
        //     }
        // }

        // 侦听器，方式二，初始化时触发
        message: {
            immediate: true, // 是否初始化时调用
            handler(newValue, oldValue) {
                if (newValue.length < 5 || newValue.length > 10) {
                    this.isHidden = false;
                } else {
                    this.isHidden = true;
                }
            }
        },
        // 深度监听，方式一，监听对象的每个属性
        // user: {
        //     handler(newValue) {
        //         console.log(newValue);
        //         console.log(newValue.name);
        //     },
        //     deep: true // 是否深度监听，给对象的每个属性都加上侦听器
        // },
        // 深度监听，方式二，监听对象的单个属性
        "user.name": {
            handler(newValue) {
                console.log(newValue);
            },
            deep: true // 是否深度监听
        }
    }
}
</script>

<template>
    <p>{{ message }}</p>
    <button @click="message = '你好'">修改message</button><br>
    <input type="text" v-model="message"><br>
    <p :hidden="isHidden">输入框中的内容不能小于5或大于10</p>
    <button @click="user.name = '小白'">修改user.name</button>
</template>

<style></style>

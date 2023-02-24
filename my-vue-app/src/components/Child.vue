<script>
export default {
    // 需要通过props接收来自父组件的数据
    // 方式一：通过数组形式
    // props: ["message", "abc", "list"]
    // 方式二：类型限制
    // props: {
    //     message: "String",
    //     abc: "String",
    //     list: "Array"
    // }
    //方式三：设置默认值
    props: {
        message: {
            type: String, //数据类型
            default: "你好", //默认值
            required: true //是否必填
        },
        abc: {
            type: String,
            default: "abc"
        },
        list: {
            type: Array,
            default() { //默认值，对象或数组需要调用default()方法
                return []
            }
        }
    }
}
</script>

<template>
    <h3>子组件</h3>
    <p>message: {{ message }}</p>
    <p>abc: {{ abc }}</p>
    <p v-for="item in list">{{ item }}</p>
</template>
<!-- 方式一： -->
<!-- <script>
export default {
    props: {
        abc: String,
        message: String,
        list: Array
    }
}
</script> -->

<!-- 方式二： -->
<!-- <script>
export default {
    props: {
        abc: String,
        message: String,
        list: Array
    }
}
</script> -->

<!-- 方式三： -->
<script>
export default {
    data() {
        return {
            childMsg: "哈喽 来自子组件的消息"
        }
    },
    methods: {
        // 第二步：定义事件，传递数据
        sendFatherData() {
            this.$emit("onReceive", this.childMsg)
        }
    },
    props: {
        abc: {
            type: String,
            default: "66666"
        },
        message: {
            type: String, //数据类型
            default: "你好", //默认值
            required: true //是否必填
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
    <div>
        <h2>子组件</h2>
        <p>abc: {{ abc }}</p>
        <p>message: {{ message }}</p>
        <p>list: {{ list }}</p>

        <!-- 第一步：发送消息 -->
        <button @click="sendFatherData">向父组件发送数据</button>
    </div>
</template>

<style scoped>
div {
    border: 1px dashed silver;
}
</style>
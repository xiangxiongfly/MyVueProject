<script>
export default {
    data() {
        return {
            eventMsg: "哈喽 来自子组件的消息"
        }
    },
    // 方法
    methods: {
        //第二步：在子组件中，通过$emit触发事件，并将数据传递过去
        sendParent() {
            this.$emit("onReceiveEvent", this.eventMsg);
        }
    }
}
</script>

<template>
    <h3>子组件2</h3>
    <!-- 第一步：发送数据 -->
    <button @click="sendParent">向父组件发送数据</button>
</template>
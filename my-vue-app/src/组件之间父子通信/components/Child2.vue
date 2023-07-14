<script setup>
// 方式一：只接收
// const props = defineProps(["abc", "message", "list"])

// 方式二：限制类型
const props = defineProps({
    abc: String,
    message: String,
    list: Array
})

// 第二步：通过defineEmits生成emit方法
// const emit = defineEmits("onReceive")
const emit = defineEmits(["onReceive"])

function sendFatherData() {
    // 第三步：触发事件，发送数据
    emit("onReceive", "哈喽 这一条来自子组件的消息")
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
<script>
export default {
    inject: ["name", "age", "address", "userInfo", "message", "changeFatherMethod"]
}
</script>

<template>
    <h2>孙子组件</h2>
    <p>{{ name }}-{{ age }}-{{ address }}</p>
    <p>{{ userInfo }}</p>
    <p>{{ message }}</p>
    <button @click="changeFatherMethod">调用顶层方法</button>
</template>
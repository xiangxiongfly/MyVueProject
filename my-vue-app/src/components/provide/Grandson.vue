<script>
export default {
    // inject: ["message"]
    inject: ["a", "b", "c"]
}
</script>

<template>
    <h2>孙子组件</h2>
    <!-- <p>孙子组件message：{{ message }}</p> -->
    <p>孙子组件a：{{ a }}</p>
    <p>孙子组件b.message：{{ b.message }}</p>
    <p>孙子组件c：{{ c() }}</p>
</template>
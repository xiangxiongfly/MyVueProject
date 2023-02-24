<script>
export default {
    data() {
        return {
            list: [1, 2, 3],
            message: "你好"
        }
    }
}
</script>
<template>
    <h2>作用域插槽</h2>
    <div>
        <slot :list="list" :message="message"></slot>
    </div>
</template>
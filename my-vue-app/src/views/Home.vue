<script>
export default {
    inject: ["store"],
    methods: {
        updateMsg() {
            this.store.updateMsg();
        }
    }
}
</script>
<template>
    {{ store.state.msg }}
    <button @click="updateMsg">修改msg</button>
</template>
<script>
import Content from "../components/Content.vue"
import Father from "../components/Father.vue"
export default {
    data() {
        return {
            rootName: "根数据"
        }
    },
    components: {
        Content,
        Father
    }
}
</script>

<template>
    <Content></Content>
    <Father></Father>
</template>

<style></style>

<script >
import Content from "../components/Content2.vue"
export default {
    data() {
        return {
            message: "abc"
        }
    },
    components: {
        Content
    }
}
</script>

<template>
    <Content :message="message"></Content>
    <button @click="message = 'efg'">修改message</button>
</template>

<style></style>

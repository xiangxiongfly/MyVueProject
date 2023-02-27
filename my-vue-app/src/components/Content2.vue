<script>
import { onUpdated, toRefs } from "vue"
export default {
    props: {
        message: {
            type: String,
            default: "你好"
        }
    },
    //可以替代mounted
    setup(props, context) {
        console.log(props, context);
        const { message } = toRefs(props);
        console.log(message.value);
        onUpdated(() => {
            console.log(message.value);
        });
    }
}
</script>

<template>
    <h2>组合式API-我是Content.vue</h2>
    <p>{{ message }}</p>
</template>
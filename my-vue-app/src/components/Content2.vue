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
    setup(props,{attrs}) {
        //接收参数
        console.log(props.message);
    }
}
</script>

<template>
    <h2>组合式API-我是Content.vue</h2>
    <p>{{ message }}</p>
</template>
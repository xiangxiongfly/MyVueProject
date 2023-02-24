<script>
import Child from "./Child.vue"
export default {
    data() {
        return {
            a: "hello world",
            b: {
                message: "hello world2"
            },
            c: "hello world3"
        }
    },
    // provide: {
    //     message: "hello world"
    // },
    // provide/inject不是响应式的，可以使用provide()函数形式支持响应式
    provide() {
        return {
            a: this.a,//不支持响应式
            b: this.b,//支持响应式，本质是对象的浅拷贝
            c: () => this.c //支持响应式，本质函数引用
        }
    },
    components: {
        Child,
    }
}
</script>

<template>
    <h2>父组件</h2>
    <!-- <p>父组件message：{{ message }}</p> -->
    <p>父组件a：{{ a }}</p>
    <p>父组件b.message：{{ b.message }}</p>
    <p>父组件c：{{ c }}</p>
    <Child></Child>
    <button @click="a = '你好1'; b.message = '你好2'; c = '你好3'">改变message</button>
</template>
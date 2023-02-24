<script>
import Child from "./Child.vue"
import Child2 from "./Child2.vue"
import Child3 from "./Child3.vue"
export default {
    data() {
        return {
            msg: "hello world",
            list: ["北京", "上海", "广州"],
            eventMsg: ""
        }
    },
    //方法
    methods: {
        // 第四步：接收数据
        getChildMsg(value) {
            this.eventMsg = value;
        }
    },
    //挂载
    mounted() {
        // 第二步：通过`$refs`获取子组件数据
        console.log(this.$refs);
        // 获取子组件的name数据
        console.log(this.$refs.child3.name);
        console.log(this.$refs.child3.age);
        console.log(this.$refs.child3.sex);
    },
    //组件
    components: {
        Child,
        Child2,
        Child3
    }
}
</script>

<template>
    <h2>父组件</h2>

    <Child :message="msg" abc="ABC" :list="list"></Child>

    <!-- 获取子组件的数据，通过自定义事件 -->
    <!-- 第三步：通过v-on监听子组件的事件，并回调getChildMsg()方法 -->
    <Child2 @onReceiveEvent="getChildMsg"></Child2>
    <p>{{ eventMsg }}</p>

    <!-- 第一步：通过`ref`注册引用信息 -->
    <Child3 ref="child3"></Child3>
    <p ref="p"></p>
</template>


<!-- 
父组件访问子组件，通过`$refs`
子组件访问父组件，通过`$parent`
访问根组件，通过`$root`
 -->
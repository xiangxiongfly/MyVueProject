<script>
export default {
    data() {
        return {
            name: "小明",
            age: 18,
            sex: true
        }
    },
    mounted() {
        // 通过`$parent`获取父组件
        console.log("父组件：", this.$parent);
        // 访问父组件数据
        console.log("父组件list：", this.$parent.list);

        // 通过`$root`获取根组件
        console.log("根组件：", this.$root);
        // 访问根组件数据
        console.log("根组件rootName：", this.$root.rootName);
    }
}
</script>

<template>
    <h3>子组件3</h3>
</template>
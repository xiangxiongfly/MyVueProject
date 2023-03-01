<script>
export default {
    data() {
        return {
            name: "",
            age: 0
        }
    },
    mounted() {
        //接收数据
        const params = this.$route.params;
        console.log(params); //{name: '小明', age: '18'}
        this.name = params.name;
        this.age = params.age;
    }
}

</script>
<template>
    <h2>About页面</h2>
    <p>name:{{ name }} age:{{ age }}</p>
</template>
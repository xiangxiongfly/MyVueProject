<script>
export default {
    //方式一，通过props接收数据
    props: ["name", "age", "address"],
    mounted() {
        //方式二：在`mounted()`中接收数据
        console.log("name:", this.$route.params.name);
        console.log("age:", this.$route.params.age);
        console.log("address:", this.$route.params.address);
    }
}
</script>
<template>
    <h2>User页面</h2>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <p>address:{{ address }}</p>
</template>
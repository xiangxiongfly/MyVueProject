<script>
export default {
    methods: {
        toAbout() {
            // 方式一：字符串路径
            // this.$router.push("/about/name/小明/age/18");

            // 方式二：路径对象
            // this.$router.push({ path: "/about/name/小明/age/18" });

            // 方式三：命名路由
            this.$router.push({ name: "about", params: { name: "小明", age: "18" } })

            // 方式四：带hash
            // this.$router.push({ path: "/info", hash: "#abc" }) //结果：/info#abc

            // 方式五：替换当前页面
            // this.$router.push({ path: "/info", replace: true })
            //等价于：
            // this.$router.replace({ path: "/info" })
        },
        forward() {
            // this.$router.forward();
            //等价于：
            this.$router.go(1);
        },
        back() {
            // this.$router.back();
            //等价于：
            this.$router.go(-1);
        },
    }
}
</script>
<template>
    <h2>Page页面</h2>
    <button @click="toAbout">跳转About页面</button>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
</template>
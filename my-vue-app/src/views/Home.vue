<script>
import axios from "axios";
export default {
    inject: ["store"],
    methods: {
        updateMsg() {
            this.store.updateMsg();
        },
        request() {
            //使用代理解决跨域问题
            axios.get("/path/banner/json")
                .then((res) => {
                    console.log(res);
                });
        }
    }
}
</script>
<template>
    <h2>Home页面</h2>
    {{ store.state.msg }}
    <button @click="updateMsg">修改msg</button>
    <button @click="request">网络请求</button>
</template>
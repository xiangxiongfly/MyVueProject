<script>
import axios from "axios";
export default {
    inject: ["store"],
    methods: {
        updateMsg() {
            this.store.updateMsg();
        },
        request() {
            //解决跨域问题
            axios.get("/path/banner/json")
                .then((res) => {
                    console.log(res);
                });
        }
    }
}
</script>
<template>
    {{ store.state.msg }}
    <button @click="updateMsg">修改msg</button>
    <button @click="request">网络请求</button>
</template>
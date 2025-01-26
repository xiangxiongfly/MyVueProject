<script>
import axios from "axios";

export default {
  inject: ["store"],
  methods: {
    updateMsg() {
      this.store.updateMsg();
    }
  }
};
</script>
<template>
  <h2>Home页面</h2>
  {{ store.state.msg }}
  <button @click="updateMsg">修改msg</button>
</template>

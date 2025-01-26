<script setup lang="ts">
import {ref} from "vue"
import useUserSearchStore from "../../../stores/userSearch.ts";

const userSearchStore = useUserSearchStore()
const keyword = ref<string>("")
const search = () => {
  if (keyword.value) {
    userSearchStore.searchUsers(keyword.value)
  }
}
</script>

<template>
  <section class="search-header">
    <h3>用户搜索</h3>
    <div>
      <input type="text" placeholder="请输入用户名关键字" v-model.trim="keyword"/>
      <button @click="search">搜索</button>
    </div>
  </section>
</template>

<style scoped>
.search-header {
  padding: 20px 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}

.search-header button {
  margin-left: 10px;
}
</style>
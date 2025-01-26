<script setup lang="ts">
import useUserSearchStore from "../../../stores/userSearch.ts";
import {storeToRefs} from "pinia";
import {LoadingState} from "../../../api/types.ts";

const userSearchStore = useUserSearchStore()
const {firstView, loadingState, errorMsg, users} = storeToRefs(userSearchStore)
</script>

<template>
  <div class="search-main">
    <h2 v-if="firstView">请输入关键字进行搜索</h2>
    <div v-else>
      <h2 v-if="loadingState===LoadingState.loading">请求中...</h2>
      <div v-else-if="loadingState===LoadingState.success">
        <div class="row">
          <div class="card" v-for="user in users" :key="user.id">
            <a :href="user.html_url" target="_blank" rel="noreferrer">
              <img :src="user.avatar_url" alt="logo" style="width:100px;">
            </a>
            <p class="card-text">{{ user.login }}</p>
          </div>
        </div>
      </div>
      <h2 v-else-if="loadingState===LoadingState.error">{{ errorMsg }}</h2>
    </div>
  </div>
</template>

<style scoped>
.card {
  float: left;
  width: 20%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 10px;
  border-radius: 100px;
}

.card-text {
  font-size: 18px;
  margin-top: 5px;
}
</style>
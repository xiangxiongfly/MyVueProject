<script lang="ts">
export default {
  name: "UserSearch"
}
</script>
<script setup lang="ts">
import SearchHeader from "./components/SearchHeader.vue";
import SearchMain from "./components/SearchMain.vue";
</script>

<template>
  <div class="user-search">
    <SearchHeader/>
    <SearchMain/>
  </div>
</template>

<style scoped>
.user-search {
  width: 100%;
}
</style>
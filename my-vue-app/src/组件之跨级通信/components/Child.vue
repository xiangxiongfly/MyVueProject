<script setup>
import Son from "./Son.vue";

</script>

<template>
  <div id="child">
    <h3>子组件</h3>
    <Son/>
  </div>
</template>

<style scoped>
div#child {
  border: 1px solid green;
  margin: 10px;
}
</style>
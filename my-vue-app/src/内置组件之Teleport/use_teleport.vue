<script setup>
import {ref} from "vue";

const disabled = ref(false);
const selectedOption = ref("false");
const handleChange = () => {
  disabled.value = selectedOption.value === "true";
};
</script>

<template>
  <h3>是否使用Teleport</h3>
  <input v-model="selectedOption" type="radio" value="true" @change="handleChange">禁用
  <input v-model="selectedOption" type="radio" value="false" checked @change="handleChange">不禁用
  <div id="box1">
    <p>box1</p>
  </div>
  <div id="box2">
    <p>box1</p>
  </div>
  <Teleport to="#box1" :disabled="disabled">
    hello Teleport
  </Teleport>
</template>

<style scoped>
div {
  border: 1px solid red;
}
</style>
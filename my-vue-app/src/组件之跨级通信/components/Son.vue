<script setup>
import {inject} from "vue"

const msg = inject("msg")
const count = inject("count")
const increaseCount = inject("increaseCount")
const increase = () => {
  count.value++
}
</script>

<template>
  <div id="son">
    <h4>孙子组件</h4>
    <p>msg: {{ msg }}</p>
    <p>count: {{ count }}</p>
    <button @click="increaseCount">increaseCount</button>
    <button @click="increase">increase</button>
  </div>
</template>

<style scoped>
div#son {
  border: 1px solid blue;
  margin: 10px;
}
</style>
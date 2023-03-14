<script setup>
import { useUserStore, useCounterStore } from "./stores/index.js"
import { storeToRefs } from "pinia"
const userStore = useUserStore();
const counterStore = useCounterStore();

//使用解构并保持响应式`storeToRefs`
const { counter, gettersCounter } = storeToRefs(counterStore);
const { addCounter } = counterStore;

console.log("userStore", userStore);
console.log("counterStore", counterStore);

//批量操作
function change() {
  userStore.$patch({
    age: 100,
    name: "xiaoming"
  })
}

//批量操作
function change2() {
  userStore.$patch((state) => {
    state.age = 200
    state.name = "xiaoming2"
    state.arr.push("a")
  })
}

//重置
function reset() {
  userStore.$reset();
}
</script>

<template>
  <h3>useUserStore</h3>
  <p>姓名：{{ userStore.name }} 年龄：{{ userStore.age }} 地址：{{ userStore.address }} 数组：{{ userStore.arr }}</p>
  <p>{{ userStore.gettersAge }}</p>
  <p>{{ userStore.gettersAge2 }}</p>
  <p>{{ userStore.gettersNameAge }}</p>
  <p>{{ userStore.gettersOther }}</p>
  <!-- 方式一：调用actions -->
  <button @click="userStore.addAge">修改age</button>
  <!-- 方式二 -->
  <button @click="userStore.age++">修改age</button>

  <!-- 批量修改 -->
  <button @click="change">批量修改</button>
  <!-- 批量修改，方式二 -->
  <button @click="change2">批量修改</button>
  <!-- 重置 -->
  <button @click="reset">重置userStore</button>

  <h3>useCounterStore</h3>
  <p>{{ counterStore.counter }}</p>
  <p>{{ counterStore.gettersCounter }}</p>
  <button @click="counterStore.addCounter">修改counter</button>

  <h2>解构：</h2>
  <p>{{ counter }}</p>
  <p>{{ gettersCounter }}</p>
  <button @click="addCounter">addCounter</button>
</template>

<style ></style>

<script setup>
import { useUserStore, useCounterStore } from "./stores/index.js"
import { storeToRefs } from "pinia"
const userStore = useUserStore();
const counterStore = useCounterStore();

// 使用解构并保持响应式`storeToRefs`
const { counter, num, gettersCounter } = storeToRefs(counterStore);
const { addCounter, subCounter, addNum } = counterStore;

console.log("userStore", userStore);
console.log("counterStore", counterStore);

// 批量操作一：
function change() {
  userStore.$patch({
    name: "xiaoming111",
    age: 100
  })
}

// 批量操作二：
function change2() {
  userStore.$patch((state) => {
    state.name = "xiaoming222"
    state.age = 200
    state.arr.push("a")
  })
}

// 重置
function reset() {
  userStore.$reset();
}
</script>

<template>
  <!-- 选项式API -->
  <h3>useUserStore</h3>
  <p>姓名：{{ userStore.name }} 年龄：{{ userStore.age }} 地址：{{ userStore.address }}</p>
  <p>数组：{{ userStore.arr }}</p>
  <p>{{ userStore.gettersAge }}</p>
  <!-- <p>{{ userStore.gettersAge2 }}</p> -->
  <p>{{ userStore.gettersNameAge }}</p>
  <p>{{ userStore.gettersOther }}</p>

  <div>
    <!-- 方式一：调用actions -->
    <button @click="userStore.addAge">修改age</button>
    <!-- 方式二 -->
    <button @click="userStore.age++">修改age</button>
  </div>

  <div>
    <!-- 批量修改 -->
    <button @click="change">批量修改</button>
    <!-- 批量修改，方式二 -->
    <button @click="change2">批量修改</button>
    <!-- 重置 -->
    <button @click="reset">重置userStore</button>
  </div>

  <!-- 组合式API -->
  <h3>useCounterStore</h3>
  <p>{{ counterStore.counter }}</p>
  <p>{{ counterStore.gettersCounter }}</p>
  <button @click="counterStore.addCounter">加</button>
  <button @click="counterStore.subCounter">减</button>

  <h3>解构</h3>
  <p>{{ counter }}</p>
  <p>{{ num }}</p>
  <p>{{ gettersCounter }}</p>
  <button @click="addCounter">加</button>
  <button @click="subCounter">减</button>
  <button @click="addNum">加num</button>
</template>
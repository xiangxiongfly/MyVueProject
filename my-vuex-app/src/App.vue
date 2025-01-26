<script setup>
import CountShow from "@/components/CountShow.vue";
import CountUpdate from "@/components/CountUpdate.vue";
import store from "./store/index.js";

const changeAge = () => {
  store.commit("increaseAge", 1);
};
const changeName = () => {
  store.commit("changeName", "a");
};
const changeAgeAsync = () => {
  store.dispatch("increaseAgeAsync", 2);
};
const changeNameAsync = () => {
  store.dispatch("changeNameAsync", "b");
};

const changeStuAge = () => {
  store.commit("student/increaseAge", 1);
};
const changeStuAgeAsync = () => {
  store.dispatch("student/increaseAgeAsync", 2);
};
</script>

<template>
  <CountShow/>
  <CountUpdate/>

  <hr/>

  <h2>子模块</h2>
  <p>name: {{ store.state.user.name }}</p>
  <p>age: {{ store.state.user.age }}</p>
  <p>age是奇数还是偶数: {{ store.getters.ageOddOrEven }}</p>
  <button @click="changeAge">修改age</button>
  <button @click="changeName">修改name</button>
  <button @click="changeAgeAsync">修改age(异步执行)</button>
  <button @click="changeNameAsync">修改name(异步执行)</button>

  <hr>

  <h2>命名空间</h2>
  <p>student age:{{ store.state.student.age }}</p>
  <p>student name:{{ store.getters["student/oddOrEven"] }}</p>
  <button @click="changeStuAge">修改age</button>
  <button @click="changeStuAgeAsync">修改age(异步执行)</button>

  <hr>
</template>
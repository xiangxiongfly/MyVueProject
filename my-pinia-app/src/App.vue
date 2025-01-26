<script setup>
import CountUpdate from "./components/CountUpdate.vue";
import CountShow from "./components/CountShow.vue";
import useStudentStore from '@/stores/student.js';

const studentStore = useStudentStore();
const updateName = () => {
  studentStore.updateName("a");
};
const updateAge = () => {
  studentStore.increaseAge(1);
};
</script>

<template>
  <CountShow/>
  <CountUpdate/>
  <hr>
  <p>student name: {{ studentStore.name }}</p>
  <p>student age: {{ studentStore.age }}</p>
  <button @click="updateName">修改姓名</button>
  <button @click="updateAge">修改年龄</button>
</template>
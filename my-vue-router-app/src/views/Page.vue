<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const back = () => {
  // router.back();
  // 等价于如下：
  router.go(-1);
};
const forward = () => {
  // router.forward();
  // 等价于如下：
  router.go(1);
};

const id = 123;
const name = "小明";
const age = "3";
const gotoUserDetail1 = () => {
  // 字符串拼接
  router.push(`/user/detail/${id}?name=${name}&age=${age}`);
};

const gotoUserDetail2 = () => {
  // 部分拼接
  router.push({
    path: `/user/detail/${id}`,
    query: {name: '小明', age: 3}
  });
};

const gotoUserDetail3 = () => {
  // 命名路由
  router.push({
    name: "userDetail",
    params: {id: 123},
    query: {name: '小明', age: 3}
  });
};
</script>

<template>
  <div>
    <h2>编程式导航</h2>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="gotoUserDetail1">跳转UserDetail1</button>
    <button @click="gotoUserDetail2">跳转UserDetail2</button>
    <button @click="gotoUserDetail3">跳转UserDetail3</button>
  </div>
</template>
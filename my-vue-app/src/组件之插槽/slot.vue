<script setup>
import MySlot from "./components/MySlot.vue";
import MyNamedSlot from "./components/MyNamedSlot.vue";
import MyDefaultSlot from "./components/MyDefaultSlot.vue";
import MyScopedSlot from "./components/MyScopedSlot.vue";
import {ref} from "vue";

const userList = ref([{name: "小明", age: 18}, {name: "小白", age: 28}, {name: "小黑", age: 38}]);
</script>

<template>
  <h1>组件之插槽</h1>
  <MySlot>
    <!--插槽内容-->
    <button>按钮</button>
    <br>
    <input type="text" placeholder="请输入123">
  </MySlot>
  <MySlot v-slot:default>
    <button>按钮</button>
    <br>
    <input type="text" placeholder="请输入123">
  </MySlot>

  <hr>

  <MyNamedSlot>
    <template v-slot:title>
      <h3>标题</h3>
    </template>
    <template v-slot:content>
      <p>这是一些内容</p>
    </template>
  </MyNamedSlot>

  <hr>

  <MyDefaultSlot>
  </MyDefaultSlot>

  <MyDefaultSlot>
    <template v-slot:title>
      <h3>我的标题</h3>
    </template>
    <template v-slot:content>
      <h3>我的内容</h3>
    </template>
  </MyDefaultSlot>

  <hr>

  <!--  <MyListSlot :list="userList">-->
  <!--    <template v-slot="slotProps">-->
  <!--      <p>index: {{ slotProps.index }} ,姓名：{{ slotProps.uname }} ,年龄：{{ slotProps.age }}</p>-->
  <!--    </template>-->
  <!--  </MyListSlot>-->

  <MyScopedSlot :list="userList">
    <template v-slot="{user,index}">
      <p>index: {{ index }} ,姓名：{{ user.name }} ,年龄：{{ user.age }}</p>
    </template>
  </MyScopedSlot>

  <hr>

</template>

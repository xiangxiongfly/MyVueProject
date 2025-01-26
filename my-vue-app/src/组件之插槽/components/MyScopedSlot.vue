<script setup>
defineProps(['list']);
</script>

<template>
  <h2>作用域插槽</h2>
  <!--  <ul>-->
  <!--    <li v-for="({name,age},index) in list" :key="item">-->
  <!--      <slot :uname="name" :age="age" :index="index"></slot>-->
  <!--    </li>-->
  <!--  </ul>-->

  <ul>
    <li v-for="(item,index) in list">
      <slot :user="item" :index="index"></slot>
    </li>
  </ul>
</template>
<script setup>
const name = "tom";
const age = 18;
const sex = true;

const name2 = "jake";
const age2 = 28;
const sex2 = false;
</script>

<template>
  <div>
    <h2>User页面</h2>
    <router-link :to="`/user/myparams/${name}/${age}/${sex}`"> 路径参数</router-link>
    <router-link :to="`/user/myquery/?name=${name2}&age=${age2}&sex=${sex2}`"> 查询参数</router-link>
    <router-link :to="`/user/myprops/${name}/${age}/${sex}?name=${name2}&age=${age2}&sex=${sex2}`"> props映射
    </router-link>
    <router-link :to="{
    name:'userDetail',
    params:{id:123},
    query:{name:'小明',age:3}
    }">
      UserDetail
    </router-link>
    <router-view></router-view>
  </div>
</template>
<template>
  <h1>缓存路由</h1>
  <router-link to="/one"> one</router-link>
  <router-link to="/two"> two</router-link>
  <router-link to="/three"> three</router-link>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
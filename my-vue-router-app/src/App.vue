<template>
  <h1>Hello Router!</h1>
  <div>
    <!-- 导航 -->
    <router-link to="/">通过path跳转Home页面</router-link><br>
    <router-link :to="{ path: '/' }">通过path2跳转Home页面</router-link><br>
    <router-link :to="{ name: 'homePage' }">通过name跳转Home页面</router-link><br>
    <router-link to="/home">通过别名1跳转Home页面</router-link><br>
    <router-link to="/index">通过别名2跳转Home页面</router-link><br>
    <router-link to="/index" replace>替换Home页面</router-link><br>
  </div>
  <p>
    <!-- 动态参数 -->
    <router-link to="/about/name/小白/age/18">跳转About页面（方式一）</router-link><br>
    <!-- 命名路由 -->
    <router-link :to="{ name: 'about', params: { name: '小黑', age: 28 } }">跳转About页面（方式二）</router-link>
  </p>
  <p>
    <!-- 嵌套路由 -->
    <router-link to="/parent">跳转Parent页面（嵌套路由）</router-link>
  </p>
  <p>
    <!-- 编程式路由 -->
    <router-link to="/page">跳转Page页面（编程式路由）</router-link>
  </p>
  <!-- 命名视图 -->
  <p>
    <router-link to="/shop">跳转Shop页面（命名视图）</router-link>
  </p>
  <p>
    <router-link to="/sidebar/info">跳转Sidebar页面（嵌套命名视图）</router-link>
  </p>
  <p>
    <router-link to="/user/小明/18/北京市">跳转User页面</router-link>
  </p>
  <p>
    <router-link :to="{ name: 'login' }">跳转Login页面</router-link>
  </p>
  <hr>

  <!-- 占位符 -->
  <router-view></router-view>

  <div style="border:1px solid grey">
    <!-- 命名视图 -->
    <router-view name="ShopTop"></router-view>
    <router-view name="ShopMain"></router-view>
    <router-view name="ShopFooter"></router-view>
  </div>
</template>
<script setup>
</script>

<template>
    <h1>Hello Router!</h1>
    <p>
        <router-link to="/">Go to Home</router-link>
    </p>
    <p>
        <router-link to="/about">Go to About</router-link>
    </p>
    <p>
        <router-link to="/User/123">Go to User</router-link>
    </p>
    <!-- 路由出口，占位符 -->
    <router-view></router-view>
</template>



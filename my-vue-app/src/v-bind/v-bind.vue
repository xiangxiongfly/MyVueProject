<script>
export default {
    data() {
        return {
            message: "hello wold",
            //class
            isActive: true,
            isBgColor: true,
            activeClass: "active",
            bgColorClass: "bgColor",
            error: null,
            classStr: "active bgColor",
            classObj: {
                active: true,
                bgColor: true
            },
            classArr: ["active", "bgColor"],
            //style
            color: "red",
            backgroundColor: "grey",
            fontSize: "30px",
            styleStr: "color:red;background-color:grey;font-size:30px;",
            styleObj: {
                color: "red",
                'background-color': "grey",
                fontSize: "30px"
            },
            styleArr: [{ color: "red" }, { 'background-color': "grey" }, { fontSize: "30px" }]
        }
    },
    // 计算属性
    computed: {
        classObject() {
            return {
                active: this.isActive && !this.error,
                bgColor: this.isBgColor && !this.error
            }
        }
    }
}
</script>

<template>
    <h1>v-bind</h1>
    <!-- 使用class -->
    <!-- 直接使用 -->
    <p class="active bgColor">hello world</p>
    <!-- 字符串写法 -->
    <p :class="classStr">hello world1</p>
    <!-- 对象写法 -->
    <p :class="{ active: isActive, bgColor: isBgColor }">hello world2</p>
    <!-- 对象写法简写 -->
    <p :class="classObj">hello world2</p>
    <!-- 计算属性 -->
    <p :class="classObject">hello world3</p>
    <!-- 数组写法 -->
    <p :class="[activeClass, bgColorClass]">hello world4</p>
    <p :class="classArr">hello world4</p>

    <button @click="isActive = !isActive">修改active</button>
    <button @click="isBgColor = !isBgColor">修改bgColor</button>


    <!-- 使用style-->
    <p style="color:red;background-color:grey;font-size:30px;">hello1</p>
    <!-- 字符串写法 -->
    <p :style="styleStr">hello1</p>
    <!-- 对象写法 -->
    <p :style="styleObj">hello2</p>
    <!-- 数组写法 -->
    <p :style="styleArr">hello3</p>
</template>

<style>
.active {
    color: red;
}

.bgColor {
    background-color: grey;
}
</style>

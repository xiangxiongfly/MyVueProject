<script >
export default {
    data() {
        return {
            message: "hello wold",
            //class
            isActive: true,
            isBgColor: true,
            classObj: {
                active: true,
                bgColor: true
            },
            error: null,
            activeClass: "active",
            bgColorClass: "bgColor",
            //style
            activeColor: "red",
            bgColor: "grey",
            fontSize: "30px",
            styleObj: {
                color: "red",
                'background-color': "grey",
                fontSize: "30px"
            },
            styleObj2: {
                border: "2px dashed black"
            }
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
    <p class="active">hello world1</p>
    <!-- class样式绑定： -->
    <!-- 绑定对象 -->
    <p :class="{ active: isActive }">hello world2</p>
    <p :class="{ active: isActive, bgColor: isBgColor }">hello world3</p>
    <!-- 绑定对象简写 -->
    <p :class="classObj">hello world4</p>
    <!-- 计算属性 -->
    <p :class="classObject">hello world5</p>
    <!-- 绑定数组 -->
    <p :class="[activeClass, bgColorClass]">hello world6</p>

    <button @click="isActive = !isActive">修改active</button>
    <button @click="isBgColor = !isBgColor">修改bgColor</button>


    <!-- 使用内联样式 -->
    <p style="color:red;">hello1</p>
    <!-- style样式绑定： -->
    <!-- 绑定对象 -->
    <p :style="{ color: activeColor, 'background-color': bgColor, fontSize: fontSize }">hello2</p>
    <!-- 绑定对象简写 -->
    <p :style="styleObj">hello3</p>
    <!-- 绑定数组 -->
    <p :style="[styleObj, styleObj2]">hello4</p>
</template>

<style>
.active {
    color: red;
}

.bgColor {
    background-color: grey;
}
</style>

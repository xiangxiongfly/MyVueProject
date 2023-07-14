<script >
export default {
    data() {
        return {
            num: 0,
            score: 0
        }
    },
    methods: {
        add(event) {
            this.num++;
        },
        add2(n) {
            this.num += n;
        },
        add3(event, n) {
            this.num += n;
            console.log(event);
        },
        addScore() {
            this.score++;
        },
        fatherClick() {
            console.log("父元素点击");
        },
        childClick() {
            console.log("子元素点击");
        },
        mclick() {
            console.log("提交成功");
        },
        onceClick() {
            console.log("aaa");
        },
        keyupFn(e) {
            console.log("按键修饰符：", e.key);
        },
        keyupEnterFn(e) {
            console.log("enter");
        },
        keyupDirectionFn(e) {
            console.log("监听方向键：", e.key);
        },
        rightClickFn() {
            console.log("鼠标右键");
        },
        ctrlFn() {
            console.log("ctrlFn");
        }
    }
}
</script>

<template>
    <h1>v-on</h1>
    <!-- 点击事件： -->
    <!-- 绑定事件，直接通过js代码处理 -->
    <button @click="num++">{{ num }}</button><br>

    <!-- 绑定事件，没有传参 -->
    <button @click="add">{{ num }}</button><br>

    <!-- 绑定事件，传递参数 -->
    <button @click="add2(5)">{{ num }}</button><br>

    <!-- 绑定事件，获取传参和事件对象 -->
    <button @click="add3($event, 5)">{{ num }}</button><br>

    <!-- 绑定多个处理函数 -->
    <button @click="add(), addScore()">{{ num }} --- {{ score }}</button>

    <!-- 事件修饰符： -->
    <!-- 阻止事件冒泡 -->
    <div @click="fatherClick">
        <button @click.stop="childClick">阻止事件冒泡</button>
    </div>
    <!-- 只触发自身事件 -->
    <div @click.self="fatherClick">
        父元素点击
        <button @click="childClick">子元素点击</button>
    </div>
    <!-- 阻止默认提交 -->
    <form action="">
        <input type="submit" value="阻止默认提交" @click.prevent="mclick">
    </form>
    <!-- 只会触发一次 -->
    <button @click.once="onceClick">只触发一次</button><br>
    <!-- 按键修饰符： -->
    <input type="text" placeholder="按键修饰符" @keyup="keyupFn"><br>

    <!-- 按键别名 -->
    <!-- 监听按键输入 -->
    <input type="text" placeholder="enter别名" @keyup.enter="keyupEnterFn"><br>
    <!-- 监听方向键 -->
    <input type="text" placeholder="监听方向键" @keyup.left.right.down.up="keyupDirectionFn"><br>
    <!-- 系统按键， -->
    <input placeholder="ctrl" @keyup.ctrl="ctrlFn" /><br>

    <!-- 鼠标按键：该按键必须在事件发出时处于按下状态。 -->
    <button @click.right="rightClickFn">鼠标按键</button>
</template>

<style></style>

<script>
export default {
    data() {
        return {
            name: "小明123",
            age: 18,
            num: 0,
            rawHtml: "<h2 style='color:red;'>hello msg</h2>",
            myid: "id01",
            isBtnDisabled: true,
            objAttrs: {
                id: "id01",
                class: "box"
            },
            imgUrl: "https://cn.vitejs.dev/logo-with-shadow.png",
            attributeName: "id",
            mouseEvent: "click",
        }
    },
    methods: {
        changeNum() {
            this.num++;
        },
        changeColor() {
            this.id = "id01";
        },
        alertMsg() {
            alert("hello world");
        }
    }
}
</script>

<template>
    <!-- 文本插值 -->
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>数量：{{ num }}</p>

    <!-- 仅修改一次 -->
    <p v-once>数量：{{ num }}</p>
    <button @click="changeNum">修改num</button>

    <!-- 使用html -->
    <p v-html="rawHtml"></p>

    <!-- 属性绑定 -->
    <p v-bind:id="myid">v-bind</p>
    <!-- v-bind简写 -->
    <p :id="myid">v-bind2</p>
    <!-- 布尔类型 -->
    <button :disabled="isBtnDisabled">v-bind2</button><br>
    <!-- 绑定多个属性 -->
    <p v-bind="objAttrs">hello world</p>

    <!-- 动态参数 -->
    <p v-bind:[attributeName]="myid">动态属性1</p>
    <img v-bind:src="imgUrl" style="width: 50px;">
    <!-- 简写 -->
    <p :[attributeName]="myid">动态属性2</p>
    <button @[mouseEvent]="attributeName = 'class'">动态事件</button>
    <button @click="mouseEvent = 'mouseover'">改变事件</button><br>

    <!-- 点击事件 -->
    <button v-on:click="changeColor">修改颜色</button>
    <!-- 简写 -->
    <button @click="changeColor">修改颜色</button><br>

    <!-- 使用JavaScript表达式 -->
    <p>{{ num + 1 }}</p>
    <p>{{ name.split("").reverse().join("") }}</p>
</template>

<style>
#id01 {
    color: red;
}

#id02 {
    color: blue;
}

.id01 {
    color: green;
}

.id02 {
    color: yellowgreen;
}

.active {
    color: red;
}

.box {
    border: 1px dashed red;
}
</style>

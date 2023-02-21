<script>
export default {
    data() {
        return {
            name: "小明123",
            age: 18,
            num: 0,
            rawHtml: "<h2 style='color:red;'>hello msg</h2>",
            id: "id02",
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
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>数量：{{ num }}</p>

    <!-- 仅修改一次 -->
    <p v-once>数量：{{ num }}</p>
    <button @click="changeNum">修改num</button>

    <!-- 使用html -->
    <p v-html="rawHtml"></p>

    <!-- 动态绑定属性值 -->
    <p v-bind:id="id">v-bind</p>
    <button @click="changeColor">修改颜色</button>
    <button v-on:click="changeColor">修改颜色</button>
    <br>
    <img v-bind:src="imgUrl" style="width: 50px;">

    <!-- 使用JS表达式 -->
    <p>{{ num + 1 }}</p>
    <p>{{ name.split("").reverse().join("") }}</p>
    <!-- 动态参数 -->
    <p v-bind:[attributeName]="id">动态属性</p>
    <button @[mouseEvent]="attributeName = 'class'">动态事件</button>
    <button @click="mouseEvent = 'mouseover'">改变事件</button>
</template>

<style>
#id01 {
    color: red;
}

#id02 {
    color: blue;
}

.id01 {
    color: yellow;
}

.id02 {
    color: yellowgreen;
}

.active {
    color: red;
}
</style>

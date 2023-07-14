<script>
export default {
    data() {
        return {
            name: "小明123",
            age: 68,
            num: 0,
            num100: function () {
                return this.num + 100;
            },
            rawHtml: "<h2 style='color:red;'>hello msg</h2>",
            userList: [
                { name: "张三", age: 19, address: "北京" },
                { name: "李四", age: 29, address: "上海" },
                { name: "王五", age: 39, address: "广州" }
            ],
            userInfo: {
                name: "小白",
                title: "顶级作者",
                bookName: "西游记"
            }
        }
    },
    methods: {
        addUser() {
            this.userList.unshift({ name: "小白", age: "8", address: "成都" })
        }
    }
}
</script>

<template>
    <h1>模板语法(Options)</h1>
    <!-- 文本插值 -->
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>数量：{{ num }}</p>
    <p>num100：{{ num100() }}</p>

    <!-- 使用html -->
    <p v-html="rawHtml"></p>

    <!-- 使用JavaScript表达式 -->
    <p>{{ num + 1 }}</p>
    <p>{{ name.split("").reverse().join("") }}</p>

    <!-- v-if条件渲染 -->
    <p v-if="age < 18">未成年人</p>
    <p v-if="age >= 18 && age < 60">年轻人</p>
    <p v-else>老人</p>

    <!-- v-for遍历数组 -->
    <ul>
        <li v-for="item in userList">
            姓名：{{ item.name }} 年龄：{{ item.age }} 地址：{{ item.address }}
        </li>
    </ul>
    <ul>
        <li v-for="(item, index) in userList">
            编号：{{ index }} 姓名：{{ item.name }} 年龄：{{ item.age }} 地址：{{ item.address }}
        </li>
    </ul>
    <ul>
        <li v-for="({ name, age, address }, index) in userList">
            编号：{{ index }} 姓名：{{ name }} 年龄：{{ age }} 地址：{{ address }}
        </li>
    </ul>

    <!-- v-for遍历对象 -->
    <ul>
        <li v-for="(value, key) in userInfo">
            {{ key }} : {{ value }}
        </li>
    </ul>
    <ul>
        <li v-for="(value, key, index) in userInfo">
            {{ index }} - {{ key }} : {{ value }}
        </li>
    </ul>

    <!-- v-for遍历字符串 -->
    <ul>
        <li v-for="(char, index) in name">
            {{ char }} {{ index }}
        </li>
    </ul>

    <!-- 指定遍历次数 -->
    <ul>
        <li v-for="(number, index) in 10">
            {{ number }} {{ index }}
        </li>
    </ul>

    <!-- :key的使用 -->
    <ul>
        <li v-for="item in userList" :key="item">
            <input type="checkbox">{{ item.name }}
        </li>
    </ul>
    <button @click="addUser">添加user</button>
</template>

<style>
ul {
    border: 1px dashed green;
}
</style>

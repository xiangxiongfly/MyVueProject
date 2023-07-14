<script >
export default {
    data() {
        return {
            msg: "hello world",
            checked: true,
            fruits: [],
            sex: "男",
            city: "上海",
            citys: [],
            desc: "abc",
            num: 0,
            inputMsg: ""
        }
    },
    methods: {
        changeMsg(e) {
            this.msg = e.target.value;
        },
        changeInput(e) {
            console.log(this.inputMsg);
        }
    }
}
</script>

<template>
    <h1>v-model</h1>
    <!-- v-model双向绑定 -->
    <input type="text" v-model="msg">
    <h3>{{ msg }}</h3>

    <!-- v-model原理： -->
    <input type="text" :value="msg" @input="changeMsg"><br>

    <!-- 单个多选框 -->
    <input type="checkbox" v-model="checked">
    <p>{{ checked }}</p>

    <!-- 多选框 -->
    <label><input type="checkbox" v-model="fruits" value="苹果">苹果</label>
    <label><input type="checkbox" v-model="fruits" value="梨子">梨子</label>
    <label><input type="checkbox" v-model="fruits" value="香蕉">香蕉</label>
    <label><input type="checkbox" v-model="fruits" value="西瓜">西瓜</label>
    <p>你喜欢的水果：{{ fruits }}</p>

    <!-- 单选框 -->
    <input type="radio" v-model="sex" value="男">男
    <input type="radio" v-model="sex" value="女">女
    <p>你的性别：{{ sex }}</p>

    <!-- 单选选项框 -->
    <select v-model="city">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
    </select>
    <p>你选的城市：{{ city }}</p>

    <!-- 多选框 -->
    <select v-model="citys" multiple>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
    </select>
    <p>你喜欢城市：{{ citys }}</p>

    <!-- v-model修饰符： -->
    <!-- .lazy 当输入框失去焦点时执行 -->
    <input type="text" v-model.lazy="desc">
    <p>{{ desc }}</p>
    <!-- .number 将输入框的内容转为number类型 -->
    <input type="text" v-model.number="num">
    <p>{{ num }} 类型：{{ typeof num }}</p>
    <!-- .trim 清楚前后空格 -->
    <input type="text" v-model.trim="inputMsg" @input="changeInput">
</template>

<style></style>

<script setup>
import { ref } from 'vue'

let msg = ref("hello world")

let searchText = ref("hello world")
function inputChange(event) {
    searchText.value = event.target.value
}

let content = ref("")

let isAgree = ref(false)
let fruits = ref([])

let gender = ref("unknown")

let hobby = ref("football")
let hobbies = ref([])

let text = ref("")

let num = ref("")

let message = ref("")
</script>

<template>
    <h1>v-model</h1>
    <p>
        <input type="text" v-model="msg">
        {{ msg }}
    </p>
    <p>
        <input type="text" :value="searchText" @input="inputChange">
        {{ searchText }}
    </p>

    <p>
        <textarea cols="30" rows="10" v-model="content"></textarea>
        输入内容：{{ content }}
    </p>

    <div>
        <label for="agree">
            <input id="agree" type="checkbox" v-model="isAgree"> 是否同意 <br>
            {{ isAgree }}
        </label>
    </div>
    <div>
        <label for="apple">
            <input id="apple" type="checkbox" value="apple" v-model="fruits">苹果
        </label>
        <label for="banana">
            <input id="banana" type="checkbox" value="banana" v-model="fruits">香蕉
        </label>
        <label for="orange">
            <input id="orange" type="checkbox" value="orange" v-model="fruits">橘子
        </label>
        <p>选中：{{ fruits }}</p>
    </div>

    <div>
        <label for="unknown">
            <input id="unknown" type="radio" value="unknown" v-model="gender"> 保密
        </label>
        <label for="boy">
            <input id="boy" type="radio" value="boy" v-model="gender"> 男
        </label>
        <label for="girl">
            <input id="girl" type="radio" value="girl" v-model="gender"> 女
        </label>
        <p>性别：{{ gender }}</p>
    </div>

    <select v-model="hobby">
        <option value="basketball">篮球</option>
        <option value="football">足球</option>
        <option value="tennis">网球</option>
    </select>
    <p>单选：{{ hobby }}</p>

    <select v-model="hobbies" multiple>
        <option value="basketball">篮球</option>
        <option value="football">足球</option>
        <option value="tennis">网球</option>
    </select>
    <p>多选：{{ hobbies }}</p>

    <input type="text" v-model.lazy="text">
    <p>{{ text }}</p>

    <input type="text" v-model.number="num">
    <p>{{ num }} 类型：{{ typeof num }}</p>

    <input type="text" v-model.trim="message">
    {{ message }}
</template>
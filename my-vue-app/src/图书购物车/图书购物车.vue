<script setup>
import { computed, ref } from "vue";
import data from "./data.js"

let books = ref(data)
let currentIndex = ref(-1)

function rowClick(index) {
    currentIndex.value = index
}

function formatPrice(price) {
    return "¥" + price
}

function decrement(index, item) {
    books.ge
    item.count--
}

function increment(index, item) {
    item.count++
}

function deleteBook(index, item) {
    books.value.splice(index, 1)
}

const totalPrice = computed(() => {
    let totalPrice = 0
    for (const item of books.value) {
        totalPrice += item.price * item.count
    }
    return totalPrice
})
</script>

<template>
    <h1>图书购物车</h1>
    <template v-if="books.length">
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书籍名称</th>
                    <th>出版日期</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in books" :key="item.id" @click="rowClick(index)"
                    :class="{ active: index === currentIndex }">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ formatPrice(item.price) }}</td>
                    <td>
                        <button :disabled="item.count <= 1" @click="decrement(index, item)">-</button>
                        {{ item.count }}
                        <button @click="increment(index, item)">+</button>
                    </td>
                    <td>
                        <button @click="deleteBook(index, item)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>总价：{{ totalPrice }}</p>
    </template>
    <template v-else>
        <p>空数据</p>
    </template>
</template>

<style scoped>
table {
    border-collapse: collapse;
}

thead {
    background-color: #f5f5f5;
}

th,
td {
    border: 1px solid #aaa;
    padding: 8px 16px;
}

.active {
    background-color: gainsboro;
}
</style>
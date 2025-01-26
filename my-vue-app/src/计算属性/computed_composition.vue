<script setup>
import {computed, reactive, ref} from 'vue'

let count = ref(0)
const person = reactive({
  name: "小明",
  age: 18
})

// 方式一：只有getter
const countComputed = computed(() => {
      return count.value * 2
    }
)

// 方式二：具有getter和setter
let personComputed = computed({
  get() {
    return `姓名：${person.name},年龄：${person.age}`
  },
  set(newValue) {
    [person.name, person.age] = newValue.split("-")
  }
})

function updateCount() {
  count.value++
}

function updatePerson() {
  person.name = "小黑"
  person.age = 28
}

function updatePersonComputed() {
  personComputed.value = "小花-38"
}

</script>

<template>
  <h1>计算属性(Options)</h1>
  <p>count：{{ count }}</p>
  <p>countComputed：{{ countComputed }}</p>
  <p>personComputed：{{ personComputed }}</p>
  <button @click="updateCount">修改count</button>
  <button @click="updatePerson">修改person</button>
  <button @click="updatePersonComputed">修改person计算属性</button>
</template>
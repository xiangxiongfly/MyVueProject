<script setup>
import {reactive, ref, watch, watchEffect} from 'vue';

const msg = ref("hello")
// 监听单个数据
watch(msg, (newVal, oldVal) => {
  console.log("msg发生变化", `新值：${newVal} 旧值：${oldVal}`)
})

const name = ref("小明")
const age = ref(18)
// 监听多个数据
watch([name, age], ([newName, newAge], [oldName, oldAge]) => {
  console.log("name或age发生变化", `新值：${newName}-${newAge} 旧值：${oldName}-${oldAge}`)
})

const userRef = ref({
  name: "小白",
  age: 18
})
// 深度监听ref对象
watch(userRef,
    (newVal, oldVal) => {
      console.log("深度监听ref对象", `新值：${newVal}  旧值：${oldVal}`)
    }, {
      deep: true
    }
)
const updateUserRef = () => {
  userRef.value.name += "111"
}

const personReactive = reactive({
  name: "小黑",
  age: 10
})
// 监听reactive对象，默认为深度监听
watch(personReactive, (newVal, oldVal) => {
  console.log("监听reactive对象", `新值：${newVal}  旧值：${oldVal}`)
})
const updatePersonReactive = () => {
  personReactive.name += "123"
}

// 可以监听所有数据
watchEffect(() => {
  console.log("数据发生变化了", personReactive.name)
})
</script>

<template>
  <h1>侦听器(Composition)</h1>
  <h2>监听单个数据</h2>
  <p>{{ msg }}</p>
  <button @click="msg='哈喽'">修改msg</button>
  <h2>监听多个数据</h2>
  <p>{{ name }} - {{ age }}</p>
  <button @click="name='小华'">修改name</button>
  <button @click="age=28">修改age</button>
  <h2>深度监听ref对象</h2>
  <p>{{ userRef }}</p>
  <button @click="updateUserRef">修改ref对象</button>
  <h2>监听reactive对象</h2>
  <p>{{ personReactive }}</p>
  <button @click="updatePersonReactive">修改reactive对象</button>
</template>
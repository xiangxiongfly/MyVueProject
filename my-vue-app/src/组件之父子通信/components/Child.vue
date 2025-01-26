<script setup>
import {ref, useAttrs} from "vue";

// 方式一：简单数组接收模式
// // num值可以直接在模版中使用
// const props = defineProps(["name", "age"])
// // 接收num值转为ref对象
// const ageRef = ref(props.age)
// const increaseAge = () => {
//   ageRef.value++
// }

// 方式二：简单对象接收模式
// const props = defineProps({
//   name: String,
//   age: Number
// })
// // 接收num值转为ref对象
// const ageRef = ref(props.age)
// const increaseAge = () => {
//   ageRef.value++
// }

// 方式三：复杂对象接收模式
const props = defineProps({
  name: String,
  age: {
    type: Number,
    default: 7,
    required: true,
    validator: value => value > 0 && value < 20
  }
})
// 接收num值转为ref对象
const ageRef = ref(props.age)
const increaseAge = () => {
  ageRef.value++
}

// 获取attrs属性
const attrs = useAttrs()
console.log("attrs", attrs)
const onChange = attrs.onChange
const invokeFatherChange = () => {
  onChange()
}
</script>
<script>
export default {
  // 非继承的attrs
  inheritAttrs: false
}
</script>

<template>
  <div id="child">
    <h3>子组件</h3>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>ageRef: {{ ageRef }}</p>
    <button @click="age++">age++</button>
    <button @click="increaseAge">ageRef++</button>
    <button @click="invokeFatherChange">调用父组件方法</button>
  </div>
</template>

<style scoped>
div#child {
  border: 1px solid green;
  margin: 10px;
}
</style>
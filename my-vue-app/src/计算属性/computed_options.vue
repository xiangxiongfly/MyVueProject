<script>
export default {
  data() {
    return {
      message: "hello world",
      person: {
        name: "小明",
        age: 18
      }
    }
  },
  //方法
  methods: {
    reverseMethod() {
      console.log("调用方法");
      return this.message.split("").reverse().join("");
    },
    updatePersonComputed() {
      this.personComputed = {name: "小白", age: 28}
    }
  },
  //计算属性
  computed: {
    // 方式一：
    reverseComputed() {
      console.log("调用计算属性");
      return this.message.split("").reverse().join("");
    },
    // 方式二：
    personComputed: {
      // getter
      get() {
        console.log("personComputed get");
        return `姓名：${this.person.name} 年龄：${this.person.age}`
      },
      // setter
      set(newValue) {
        console.log("personComputed set");
        const {name, age} = newValue;
        this.person.name = name
        this.person.age = age
      }
    }
  }
}
</script>

<template>
  <h1>计算属性(Options)</h1>
  <p>原始值：{{ message }}</p>
  <p>第一次调用方法：{{ reverseMethod() }}</p>
  <p>第二次调用方法：{{ reverseMethod() }}</p>
  <p>第一次调用计算属性：{{ reverseComputed }}</p>
  <p>第二次调用计算属性：{{ reverseComputed }}</p>
  <button @click="message = '你好'">修改message</button>
  <p>{{ personComputed }}</p>
  <button @click="updatePersonComputed">修改personComputed</button>
</template>
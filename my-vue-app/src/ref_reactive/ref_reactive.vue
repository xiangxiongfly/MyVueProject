<script>
import {ref, reactive, toRefs, toRef} from 'vue'

export default {
  // 组合式API，将同一逻辑关联在一起
  // setup在created之前调用，也就是实例被完全初始化之前
  setup() {
    console.log("setup");
    console.log(this); //undefined，this不会指向应用实例

    // 不是响应式
    let message = "hello"
    const changeMessage = () => {
      message = "你好"
    }

    // ref
    const count = ref(0)
    console.log("count值：", count.value)
    const increaseCount = () => {
      count.value = count.value + 1
    }
    const user = ref({name: "小明", age: 18, sex: true})
    const changeUser = () => {
      user.value = {name: "小白", age: user.value.age + 1, sex: false}
    }

    // reactive
    const state = reactive({
      msg: "hello",
      person: {name: "小黑", age: 18},
      address: ["陕西省", "西安市"]
    })
    const changeMsg = () => {
      state.msg = "你好"
    }
    const changePerson = () => {
      state.person = {name: "xiaohei", age: 28}
    }
    const changeAddress = () => {
      state.address = ["湖南省", "长沙市"]
    }

    // toRefs
    const stateRefs = toRefs(state)
    const {msg, person, address} = stateRefs

    // toRef
    const msgRef = toRef(state, "msg")
    const personRef = toRef(state, "person")
    const addressRef = toRef(state, "address")


    return {
      message, changeMessage,
      count, increaseCount, user, changeUser,
      state, changeMsg, changePerson, changeAddress,
      msg, person, address,
      msgRef, personRef, addressRef
    }
  }
}
</script>

<template>
  <h1>ref & reactive</h1>
  <h2>不使用响应式</h2>
  <p>{{ message }}</p>
  <button @click="changeMessage">修改message</button>

  <h2>ref</h2>
  <p>{{ count }}</p>
  <button @click="increaseCount">count++</button>
  <p>{{ user }}</p>
  <button @click="changeUser">修改user</button>

  <h2>reactive</h2>
  <p>msg: {{ state.msg }}</p>
  <p>person: {{ state.person }}</p>
  <p>address: {{ state.address }}</p>

  <h2>toRefs</h2>
  <p>msg: {{ msg }}</p>
  <p>person: {{ person }}</p>
  <p>address: {{ address }}</p>

  <h2>toRef</h2>
  <p>msg: {{ msgRef }}</p>
  <p>person: {{ personRef }}</p>
  <p>address: {{ addressRef }}</p>

  <button @click="changeMsg">修改msg</button>
  <button @click="changePerson">修改person</button>
  <button @click="changeAddress">修改address</button>

</template>
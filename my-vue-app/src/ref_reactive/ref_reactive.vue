<script>
import {ref, reactive, toRefs, toRef, readonly, shallowReadonly, toRaw, markRaw, isReactive} from 'vue'

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

    // readonly & shallowReadonly
    // 生成一个深度可读可写的reactive对象
    const reactiveObj = reactive({
      name: "张三",
      addr: {
        city: "上海"
      }
    })
    // 生成一个深度可读的reactive对象
    const onlyObj = readonly(reactiveObj)
    // 生成一个浅层可读的reactive对象
    const srObj = shallowReadonly(reactiveObj)
    const updateReactive = () => {
      reactiveObj.name = "张四" // 程序正常运行，页面会自动更新
      reactiveObj.addr.city = "北京" // 程序正常运行，页面会自动更新
    }
    const updateOnly = () => {
      onlyObj.name = "张五" // IDE和控制台警告，页面不会自动更新
      onlyObj.addr.city = "广州" // IDE和控制台警告，页面不会自动更新
    }
    const updateShallow = () => {
      srObj.name = "张六" // IDE和控制台警告，页面不会自动更新
      srObj.addr.city = "深圳" // IDE和控制台警告，页面会自动更新
    }

    // 创建一个原始对象
    const rawPerson = {
      name: "小花",
      city: "上海"
    }
    // 转为reactive对象
    const reactivePerson = reactive(rawPerson)
    // 转为原始对象
    const rawObj = toRaw(reactivePerson)
    console.log("原始类：", rawPerson === rawObj) // true
    const changeRawObj = () => {
      rawObj.name += "更新了"
      rawObj.city += "更新了"
    }

    // 标记为原始对象
    const markObj = markRaw({
      name: "小明",
      city: "武汉"
    })
    // 标记对象不能转为reactive对象
    const reactObj = reactive(markObj)
    console.log("标记类：", isReactive(reactObj)) // false
    const changeReactObj = () => {
      reactObj.name += "更新了"
      reactObj.city += "更新了"
    }


    return {
      message,
      changeMessage,
      count,
      increaseCount,
      user,
      changeUser,
      state,
      changeMsg,
      changePerson,
      changeAddress,
      msg,
      person,
      address,
      msgRef,
      personRef,
      addressRef,
      reactiveObj, onlyObj, srObj,
      updateReactive, updateOnly, updateShallow,
      rawObj, changeRawObj, reactObj, changeReactObj
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

  <h2>readonly & shallowReadonly</h2>
  <p>reactiveObj.name: {{ reactiveObj.name }}</p>
  <p>reactiveObj.addr.city: {{ reactiveObj.addr.city }}</p>
  <p>onlyObj.name: {{ onlyObj.name }}</p>
  <p>onlyObj.addr.city: {{ onlyObj.addr.city }}</p>
  <p>srObj.name: {{ srObj.name }}</p>
  <p>srObj.addr.city: {{ srObj.addr.city }}</p>
  <button @click="updateReactive">通过reactive更新对象</button>
  <button @click="updateOnly">通过readonly()更新对象</button>
  <button @click="updateShallow">通过shallowReadonly()更新对象</button>

  <h2>toRaw()</h2>
  <p>rawObj:{{ rawObj }}</p>
  <button @click="changeRawObj">修改raw对象</button>

  <h2>markRaw()</h2>
  <p>reactObj:{{ reactObj }}</p>
  <button @click="changeReactObj">修改reactive对象</button>


</template>
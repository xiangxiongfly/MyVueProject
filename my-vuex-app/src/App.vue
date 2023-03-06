<script >
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      num: 10
    }
  },
  methods: {
    increment() {
      //使用`$store.commit`触发方法
      this.$store.commit("increment");
    },
    add() {
      this.$store.commit("add", 5);
    },
    add2() {
      this.$store.commit("add2", { num: 10 });
    },
    add3() {
      this.$store.commit({
        type: "add",
        num: 20
      })
    },
    increment2() {
      this.$store.dispatch("increment");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync")
    },
    changeUserName() {
      this.$store.commit("updateUserName");
    },
    changeStudentName() {
      this.$store.commit("student/updateStudentName");
    }
  },
  //mapState传对象
  // computed: mapState({
  //   //简化代码：
  //   //方式一；使用箭头函数
  //   // count: state => state.count,
  //   //方式二：字符串参数，等价于`state => state.count`
  //   count: "count"
  // })
  //mapState传数组
  // computed: mapState(["count", "msg"])
  //对象扩展运算符
  computed: {
    addNum() {
      return this.num + 5;
    },
    ...mapState(["count", "msg"]),
    ...mapGetters(["reverseMsg", "reverseMsgLength"])
  }
}
</script>

<template>
  <p>count: {{ $store.state.count }}</p>
  <p>{{ count }}</p>
  <p>{{ msg }}</p>
  <p>{{ addNum }}</p>
  <!-- 方式一，不推荐 -->
  <button @click="$store.state.count++">修改count</button>
  <!-- 方式二 -->
  <button @click="increment">修改count</button>
  <!-- 方式三，提交参数 -->
  <button @click="add">修改num（提交参数 ）</button>
  <!-- 方式四，提交对象 -->
  <button @click="add2">修改num（提交对象）</button>
  <!-- 方式五：对象风格提交 -->
  <button @click="add3">修改num（对象风格提交）</button>

  <!-- 使用actions -->
  <button @click="increment2">修改num(actions)</button>
  <button @click="incrementAsync">修改num(异步)</button>

  <p>{{ $store.getters.reverseMsg }}</p>
  <p>{{ $store.getters.reverseMsgLength }}</p>
  <p>{{ reverseMsg }}</p>
  <p>{{ reverseMsgLength }}</p>

  <h2>user模块</h2>
  <p>{{ $store.state.user.userName }}</p>
  <button @click="changeUserName">修改userName</button>
  <p>{{ $store.getters.userNameAge }}</p>

  <h2>student模块</h2>
  <p>{{ $store.state.student.userName }}</p>
  <button @click="changeStudentName">修改studentName</button>
  <p>{{ $store.getters["student/userNameAge"] }}</p>
</template>

<style ></style>

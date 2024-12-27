<script>
export default {
  data() {
    return {
      name: "小明123",
      age: 68,
      num: 0,
      num100: function () {
        return this.num + 100;
      },
      message: "hello world",
      html: "<a style='color:red;' href='http://www.baidu.com'>hello world</a>",
      count: 0,
      userInfo: {
        name: "小白",
        title: "顶级作者",
        bookName: "西游记"
      },
      userList: [
        {id: 1, name: "张三", age: 19, address: "北京"},
        {id: 2, name: "李四", age: 29, address: "上海"},
        {id: 3, name: "王五", age: 39, address: "广州"}
      ],
      keyword: "", // 过滤关键字
      sortType: 0 // 0 原顺序，1 升序，2 降序
    }
  },
  methods: {
    addFirst() {
      this.userList.unshift({id: Date.now(), name: "小白" + Date.now().toString(), age: "1", address: "武汉"})
    },
    addLast() {
      this.userList.push({id: Date.now(), name: "小黑" + Date.now().toString(), age: "100", address: "长沙"})
    },
    deleteItem(index) {
      this.userList.splice(index, 1)
    },
    updateItem(index) {
      this.userList[index].age++
    }
  },
  computed: {
    filterUserList() {
      const {userList, keyword, sortType} = this
      const arr = userList.filter(user => {
        return user.name.indexOf(keyword) !== -1
      })
      if (sortType != 0) {
        arr.sort((u1, u2) => {
          if (sortType === 1) {
            return u1.age - u2.age
          } else {
            return u2.age - u1.age
          }
        })
      }
      return arr
    }
  }
}
</script>

<template>
  <h1>模板语法(Options)</h1>
  <h2>差值语法</h2>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>数量：{{ num }}</p>
  <p>num100：{{ num100() }}</p>
  <p>{{ num + 1 }}</p>
  <p>{{ name.split("").reverse().join("") }}</p>

  <h2>v-text和v-html</h2>
  <p v-html="html"></p>
  <p v-text="html"></p>

  <h2>v-pre</h2>
  <p>{{ message }}</p>
  <p v-pre>{{message}}</p>

  <h2>v-once</h2>
  <p v-once>{{ message }}</p>
  <button @click="message='abcdefg'">修改message</button>

  <h2>v-memo</h2>
  <div v-memo="[count]">
    <p>count:{{ count }}</p>
    <p>age:{{ age }}</p>
  </div>
  <button @click="count++">count++</button>
  <button @click="age++">age++</button>

  <h2>v-cloak</h2>
  <p v-cloak>{{ message }}</p>

  <h2>判断逻辑</h2>
  <p v-if="age < 18">未成年人</p>
  <p v-else-if="age >= 18 && age < 60">年轻人</p>
  <p v-else>老人</p>

  <!-- v-for遍历数组 -->
  <h2>遍历数组</h2>
  <ul>
    <li v-for="(item, index) in userList">
      编号：{{ index }} 姓名：{{ item.name }} 年龄：{{ item.age }} 地址：{{ item.address }}
    </li>
  </ul>

  <!-- v-for遍历对象 -->
  <h2>遍历对象</h2>
  <ul>
    <li v-for="(value, key, index) in userInfo">
      {{ index }} - {{ key }} : {{ value }}
    </li>
  </ul>

  <!-- v-for遍历字符串 -->
  <h2>遍历字符串</h2>
  <ul>
    <li v-for="(char, index) in name">
      {{ char }} {{ index }}
    </li>
  </ul>

  <!-- 指定遍历次数 -->
  <h2>遍历次数</h2>
  <ul>
    <li v-for="(number, index) in 5">
      {{ number }} {{ index }}
    </li>
  </ul>

  <h2>用户列表</h2>
  <input type="text" placeholder="搜索姓名" v-model="keyword">
  <ul>
    <li v-for="(item, index) in filterUserList" :key="item.id">
      <input type="checkbox">姓名：{{ item.name }} 年龄：{{ item.age }} 地址：{{ item.address }}
      <button @click="deleteItem(index)">删除</button>
      <button @click="updateItem(index)">修改</button>
    </li>
  </ul>
  <button @click="addFirst()">头部添加</button>
  <button @click="addLast()">尾部添加</button>
  <br>
  <button @click="sortType = 1">年龄升序</button>
  <button @click="sortType = 2">年龄降序</button>
  <button @click="sortType = 0">还原</button>

</template>

<style>
ul {
  border: 1px dashed green;
}

[v-cloak] {
  display: none;
}
</style>

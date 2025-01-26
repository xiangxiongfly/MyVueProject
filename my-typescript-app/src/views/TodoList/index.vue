<script lang="ts">
export default {
  name: "TodoList"
}
</script>
<script setup lang="ts">
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoMain from "./components/TodoMain.vue";
</script>

<template>
  <div class="todo-list">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoMain/>
      <TodoFooter/>
    </div>
  </div>
</template>

<style>
.todo-list .btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 14px;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
}

.todo-list .btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.todo-list .btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.todo-list .btn:focus {
  border: none;
  box-shadow: none;
}
</style>
<style scoped>
.todo-list {
  width: 100%;
}

.todo-list .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
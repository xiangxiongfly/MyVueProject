<script setup lang="ts">

import useTodosStore from "../../../stores/todos.ts";
import {computed} from "vue";

const todosState = useTodosStore()
const isCheck = computed<boolean>({
  get() {
    return todosState.isCheckAll
  },
  set(value) {
    todosState.selectAll(value)
  }
})
const handleClear = () => {
  if (confirm("确定清除吗？")) {
    todosState.deleteAllComplete()
  }
}
</script>

<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck">
    </label>
    <span>
      <span>已完成 {{ todosState.completeSize }} / 全部 {{ todosState.todoList.length }}</span>
    </span>
    <button v-if="todosState.completeSize" class="btn btn-danger" @click="handleClear">清除已完成任务</button>
  </div>
</template>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer button {
  margin-top: 5px;
  float: right;
}
</style>
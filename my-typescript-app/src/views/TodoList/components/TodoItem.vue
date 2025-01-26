<script setup lang="ts">
import useTodosStore from "../../../stores/todos.ts";
import {computed} from "vue";
import type {Todo} from "../../../stores/types.ts";

const todosStore = useTodosStore()
const props = defineProps<{ todo: Todo }>()
const isCheck = computed<boolean>({
  get() {
    return props.todo.completed
  },
  set(value) {
    todosStore.toggleTodo(props.todo.id!)
  }
})
</script>

<template>
  <li class="todo-item">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span :class="{done:todo.completed}">{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="todosStore.deleteTodo(todo.id!)">删除</button>
  </li>
</template>

<style scoped>
.todo-item {
  list-style: none;
  height: 40px;
  line-height: 40px;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}

.todo-item label {
  cursor: pointer;
}

.todo-item label input {
  margin-right: 6px;
  position: relative;
}

.todo-item button {
  float: right;
  margin-top: 3px;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item .done {
  color: #999;
  text-decoration: line-through;
}
</style>
<script setup lang="ts">
import TodoItem from "./TodoItem.vue"
import useTodosStore from "../../../stores/todos.ts";

const todosStore = useTodosStore()
</script>

<template>
  <ul class="todo-main">
    <TodoItem v-for="todo in todosStore.todoList" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
</style>
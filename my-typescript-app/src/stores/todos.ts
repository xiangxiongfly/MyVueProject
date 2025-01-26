import {defineStore} from "pinia";
import type {Todo, TodosState} from "./types.ts";

const useTodosStore = defineStore("todos", {
    state: (): TodosState => {
        return {
            todoList: []
        }
    },
    actions: {
        // 添加Todo
        addTodo(title: string) {
            const todo: Todo = {
                id: Date.now(),
                title,
                completed: false
            }
            this.todoList.unshift(todo)
        },
        // 切换Todo状态
        toggleTodo(id: number) {
            this.todoList.some((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                    return true
                }
                return false
            })
        },
        // 删除指定id的Todo
        deleteTodo(id: number) {
            this.todoList = this.todoList.filter((todo) => todo.id !== id)
        },
        // 删除所有已完成的Todo
        deleteAllComplete() {
            this.todoList = this.todoList.filter((todo) => !todo.completed)
        },
        // 全选或全不选
        selectAll(isCheck: boolean) {
            this.todoList.forEach((todo) => todo.completed = isCheck)
        }
    },
    getters: {
        // 已完成数量
        completeSize(): number {
            let count = 0
            this.todoList.forEach((todo) => {
                if (todo.completed) {
                    count++
                }
            })
            return count
        },
        // 是否全选
        isCheckAll(): boolean {
            return this.completeSize > 0 && this.completeSize == this.todoList.length;
        }
    }
});

export default useTodosStore;
export interface Todo {
    id?: number;
    title: string;
    completed: boolean;
}

export type TodoList = Todo[]

export interface TodosState {
    todoList: TodoList
}
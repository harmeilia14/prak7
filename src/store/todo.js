import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false
      })
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    toggleTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    }
  },
  getters: {
    unfinishedTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.done).length
    }
  }
})

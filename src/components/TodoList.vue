<template>
    <div class="todo-list">
      <h1>List Tugas</h1>
      <input v-model="newTodo" @keyup.enter="addNewTodo" placeholder="Tambah tugas" class="input" />
      <p>
        Tugas yang belum di kerjakan: <span class="count">{{ unfinishedTodosCount }}</span>
      </p>
      <ul>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle="toggleTodo"
          @remove="removeTodo"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import { useTodoStore } from '@/store/todo'
  import TodoItem from './TodoItem.vue'
  
  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        newTodo: ''
      }
    },
    computed: {
      todos() {
        const todoStore = useTodoStore()
        return todoStore.todos
      },
      unfinishedTodosCount() {
        const todoStore = useTodoStore()
        return todoStore.unfinishedTodosCount
      }
    },
    methods: {
      addNewTodo() {
        if (this.newTodo.trim()) {
          const todoStore = useTodoStore()
          todoStore.addTodo(this.newTodo)
          this.newTodo = ''
        }
      },
      toggleTodo(id) {
        const todoStore = useTodoStore()
        todoStore.toggleTodo(id)
      },
      removeTodo(id) {
        const todoStore = useTodoStore()
        todoStore.removeTodo(id)
      }
    }
  }
  </script>
  
  <style scoped>
  .todo-list {
    width: 90%; /* Mengatur lebar ke 90% */
    max-width: 600px; /* Maksimum lebar */
    margin: 90px;
    padding: 40px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Monospace';
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .todo-list h1 {
    text-align: center;
    color: #333;
  }
  
  .input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }
  
  p {
    text-align: center;
    color: #514c4c;
  }
  
  .count {
    font-weight: bold;
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.3s;
    width: 100%;
  }
  
  li:hover {
    background-color: #f9f9f9;
  }
  
  .done {
    text-decoration: line-through;
    color: #5f5b5b;
  }
  
  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #c0392b;
  }
  </style>
  
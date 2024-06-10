<template>
    <li :class="{ done: todo.done }">
      <input type="checkbox" :checked="todo.done" @change="toggleTodo" />
      <span>{{ todo.text }}</span>
      <button @click="removeTodo">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleTodo() {
        this.$emit('toggle', this.todo.id)
      },
      removeTodo() {
        this.$emit('remove', this.todo.id)
      }
    }
  }
  </script>
  
  <style scoped>
  .done {
    text-decoration: line-through;
    color: #888;
  }
  
  input[type='checkbox'] {
    margin-right: 10px;
  }
  </style>
  
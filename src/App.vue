<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
}
</style>

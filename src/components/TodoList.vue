<template>
<div>
  <h1 id="title">Vue Todo</h1>
  <todo-form @submit="addTodo" />

  <h3 v-if="sortedTodos.length > 0">Todo</h3>
  <ul id="todo-list">
    <list-item
      v-for="(todo, i) in sortedTodos"
      :key="i"
      :todo="todo"
      @delete="deleteTodo(i)"
      @complete="completeTodo(i)"
      @edit="saveTodos"
    />
  </ul>

  <h3 v-if="completed.length > 0">Done</h3>
  <ul id="todo-list">
    <list-item
      v-for="(todo, i) in completed"
      :key="i"
      :todo="todo"
      :isCompleted="true"
      @delete="deleteTodo({ i, isCompleted: true })"
    />
  </ul>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TodoForm from './TodoForm.vue'
import ListItem from './ListItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoForm,
    ListItem
  },
  computed: {
    ...mapState([
      'todos',
      'completed'
    ]),
    sortedTodos () {
      return this.todos.slice().sort((a, b) => a.priority - b.priority)
    }
  },
  mounted () {
    this.checkStorage()
  },
  methods: {
    ...mapActions([
      'addTodo',
      'deleteTodo',
      'completeTodo',
      'checkStorage',
      'saveTodos'
    ])
  }
}
</script>

<style scoped>
#title {
  text-align: center;
  margin: 40px 0;
}

#todo-list {
  margin: 0;
  padding: 0;
}
</style>

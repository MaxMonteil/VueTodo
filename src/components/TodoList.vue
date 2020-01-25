<template>
<div class="flex flex-col mt-20 mx-4">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Simple Todos</h1>
  <todo-form @submit="addTodo" />

  <h2
    v-if="sortedTodos.length > 0"
    class="text-2xl font-bold mt-4 text-green-500 tracking-wide"
  >
    Tasks
  </h2>
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

  <h2
    v-if="completed.length > 0"
    class="text-2xl font-bold mt-4 text-gray-600 tracking-wide"
  >
    Done
  </h2>
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

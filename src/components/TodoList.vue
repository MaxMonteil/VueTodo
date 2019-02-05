<template>
<div>
  <h1 id="title">Reuse Forms Todo</h1>
  <todo-form @submit="addTodo" />

  <h3 v-if="sortedTodos.length > 0">Todo</h3>
  <ul id="todo-list">
    <list-item
      v-for="(todo, i) in sortedTodos"
      :key="i"
      :todo="todo"
      @delete="deleteTodo(i)"
      @complete="completeTodo(i)"/>
  </ul>

  <h3 v-if="completed.length > 0">Done</h3>
  <ul id="todo-list">
    <list-item
      v-for="(todo, i) in completed"
      :key="i"
      :todo="todo"
      :isCompleted="true"
      @delete="deleteTodo({ i, isCompleted: true })"/>
  </ul>
</div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import ListItem from './ListItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoForm,
    ListItem
  },
  data () {
    return {
      todos: [],
      completed: []
    }
  },
  computed: {
    sortedTodos () {
      return this.todos.sort((a, b) => a.priority - b.priority)
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    },
    deleteTodo ({ i, isCompleted }) {
      if (isCompleted) {
        this.completed.splice(i, 1)
      } else {
        this.todos.splice(i, 1)
      }
    },
    completeTodo (index) {
      this.completed.push(this.todos.splice(index, 1)[0])
    }
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

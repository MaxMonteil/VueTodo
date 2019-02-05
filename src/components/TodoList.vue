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
      completed: [],
      dataFields: ['todos', 'completed']
    }
  },
  computed: {
    sortedTodos () {
      return this.todos.sort((a, b) => a.priority - b.priority)
    }
  },
  mounted () {
    this.dataFields.forEach(field => this.checkStorage(field))
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
      this.saveTodos()
    },
    deleteTodo ({ i, isCompleted }) {
      if (isCompleted) {
        this.completed.splice(i, 1)
      } else {
        this.todos.splice(i, 1)
      }
      this.saveTodos()
    },
    completeTodo (index) {
      this.completed.push(this.todos.splice(index, 1)[0])
      this.saveTodos()
    },
    saveTodos () {
      this.dataFields.forEach(field => localStorage.setItem(field, JSON.stringify(this[field])))
    },
    checkStorage (key) {
      if (localStorage.getItem(key)) {
        try {
          this[key] = JSON.parse(localStorage.getItem(key))
        } catch (e) {
          localStorage.removeItem(key)
        }
      }
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

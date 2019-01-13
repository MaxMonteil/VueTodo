<template>
<li class="todo-item" :class="{ completed: isCompleted }">
  <div class="todo-content" v-if="!editing">
    <p>{{ todo.priority }} | {{ todo.title }}</p>
    <span>
      <button type="button" class ="delete-button" @click="deleteTodo">X</button>
      <button type="button" class ="edit-button" @click="editTodo" v-if="!isCompleted">
        <svg aria-hidden="true" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-380 -380 1280 1280"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
      </button>
      <button type="button" class ="complete-button" @click="completeTodo" v-if="!isCompleted">✓</button>
    </span>
  </div>

  <div class="todo-form" v-else>
    <todo-form/>
  </div>
</li>
</template>

<script>
import TodoForm from './TodoForm.vue'

export default {
  name: 'ListItem',
  props: {
    todo: Object,
    isCompleted: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editing: false
    }
  },
  components: {
    TodoForm
  },
  methods: {
    deleteTodo() {
      this.$emit('delete')
    },
    completeTodo() {
      this.$emit('complete')
    },
    editTodo() {
      this.editing = !this.editing
    }
  }
}
</script>

<style scoped>
.todo-item {
  margin: 16px 0;
  padding: 8px;
  padding-left: 16px;
  background-color: #42b983;
  border-radius: 8px;
  color: white;
}

.todo-content {
  display: flex;
  justify-content: space-between;
}

span {
  display: flex;
  align-self: center;
}

button {
  /* clear button styling */
  background: none;
  outline: none;
  border: none;
  padding: 0;

  /* custom styling */
  margin-left: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: white;
}

.delete-button {
  font-weight: bold;
}

.edit-button {
  font-size: 1.2em;
}

.complete-button {
  font-size: 1.2em;
}

button:active {
  background-color: white;
  color: #42b983;
}

.completed {
  background-color: rgba(66, 185, 131, 0.4);
}

.completed > p {
  text-decoration: line-through;
}
</style>

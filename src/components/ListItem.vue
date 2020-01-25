<template>
<li
  class="my-4 p-2 px-4 rounded-lg"
  :class="isCompleted ? 'bg-gray-300 text-gray-700' : 'bg-green-300 text-green-900'"
>
  <div
    v-if="!editing"
    class="flex justify-between items-center"
  >
    <p :class="isCompleted ? 'line-through': ''">{{ todo.priority }} | {{ todo.title }}</p>

    <span class="flex self-center">
      <button
        @click="deleteTodo"
        type="button"
        title="delete"
        class="font-bold rounded-full w-8 h-8"
      >
        X
      </button>

      <button
        v-if="!isCompleted"
        @click="editTodo"
        type="button"
        title="edit"
        class="font-bold rounded-full w-8 h-8"
      >
        <svg aria-hidden="true" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-380 -380 1280 1280"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
      </button>

      <button
        v-if="!isCompleted"
        @click="completeTodo"
        type="button"
        title="complete"
        class="font-bold rounded-full w-8 h-8"
      >
        ✓
      </button>
    </span>
  </div>

  <todo-form
    v-else
    :populateWith="todo"
    @close="editTodo" />
</li>
</template>

<script>
import TodoForm from './TodoForm.vue'

export default {
  name: 'ListItem',
  props: {
    todo: {
      type: Object,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TodoForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteTodo () {
      this.$emit('delete')
    },
    completeTodo () {
      this.$emit('complete')
    },
    editTodo () {
      this.$emit('edit')
      this.editing = !this.editing
    }
  }
}
</script>

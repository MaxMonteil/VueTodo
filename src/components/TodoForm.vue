<template>
<form
  @submit.prevent="submit"
  class="flex flex-wrap justify-between sm:justify-center"
>
  <label
    class="inline sm:mr-4"
    :class="populateWith.empty ? 'mr-8' : ''"
  >
    Priority
    <input
      class="block my-2 p-2 rounded border border-gray-400 focus:border-green-400 focus:outline-none"
      type="number"
      min="1"
      max="10"
      placeholder="1-10"
      v-model.number="todo.priority"
    >
  </label>

  <label class="inline">Task
    <input
      class="block my-2 p-2 rounded border border-gray-400 focus:border-green-400 focus:outline-none"
      type="text"
      placeholder="Get milk..."
      v-model.trim="todo.title"
    >
  </label>

  <div
    class="flex flex-grow sm:ml-4"
    :class="{ 'sm:flex-grow-0': populateWith.empty }"
  >
    <button
      type="submit"
      title="save"
      class="bg-white flex-grow active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 rounded-full w-8 h-8 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'"
    >
      {{ populateWith.empty ? '+' : 'Save' }}
    </button>

    <button
      v-if="!populateWith.empty"
      @click="close"
      type="button"
      title="cancel"
      class="bg-white active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 rounded-full w-8 h-8 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'"
    >
      Cancel
    </button>
  </div>
</form>
</template>

<script>
export default {
  name: 'TodoForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data () {
    return {
      todo: {
        title: '',
        priority: null
      }
    }
  },
  methods: {
    clearForm () {
      this.todo = {
        title: '',
        priority: null
      }
    },
    submit () {
      if (this.todo.title !== '' && this.todo.priority !== null && this.todo.priority >= 1 && this.todo.priority <= 10) {
        this.$emit('submit', this.todo)
        this.clearForm()
        this.close()
      }
    },
    close () {
      this.$emit('close')
    }
  },
  created () {
    if (!this.populateWith.empty) {
      this.todo = this.populateWith
    }
  }
}
</script>

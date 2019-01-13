<template>
<form @submit.prevent="submit" id="todo-form">
  <label id="priority">Priority
    <input type="number" min="1" max="10" placeholder="1-10" v-model.number="todo.priority">
  </label>

  <label id="title">Title
    <input type="text" placeholder="Get milk..." v-model.trim="todo.title">
  </label>

  <button type="submit">+</button>
  <button type="button" class="cancel-button" @click="close" v-if="!populateWith.empty">Cancel</button>
</form>
</template>

<script>
export default {
  name: 'TodoForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: false })
    }
  },
  data() {
    return {
      todo: {
        title: '',
        priority: null
      }
    }
  },
  methods: {
    clearForm() {
      this.todo = {
        title: '',
        priority: null
      }
    },
    submit() {
      if (this.todo.title !== '' && this.todo.priority !== null && this.todo.priority >= 1 && this.todo.priority <= 10) {
        this.$emit('submit', this.todo)
        this.clearForm()
        this.close()
      }
    },
    close() {
      this.$emit('close')
    }
  },
  created() {
    if (!this.populateWith.empty) {
      this.todo = this.populateWith
    }
  }
}
</script>

<style scoped>
#todo-form {
  display: flex;
  margin: 24px;
  margin-bottom: 32px;
  justify-content: center;
}

label {
  margin-right: 16px;
}
input {
  display: block;
  margin: 8px 0;
  padding: 8px;
  border-radius: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
}

input:focus {
  border: 0.5px solid #42b983;
  outline: 0;
  box-shadow: none;
}

button {
  /* clear button styling */
  background: none;
  outline: none;
  border: none;
  padding: 0;

  /* custom styling */
  background-color: white;
  border: 1px solid #42b983;
  margin-left: 8px;
  margin-bottom: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: #42b983;
  font-size: 1.2em;
  font-weight: bold;
  align-self: flex-end;
}

button:active {
  background-color: #42b983;
  color: white;
}

.cancel-button {
  box-sizing: border-box;
  font-size: 1em;
  background: none;
  border: none;
  border-radius: 0;
  text-align: center;
  width: 50px;
  color: white;
  font-weight: normal;
}

.cancel-button:active {
  font-weight: bold;
}
</style>

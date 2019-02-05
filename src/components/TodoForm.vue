<template>
<form @submit.prevent="submit" class="todo-form">
  <label id="priority" class="form-label">Priority
    <input class="form-input" type="number" min="1" max="10" placeholder="1-10" v-model.number="todo.priority">
  </label>

  <label id="title" class="form-label">Title
    <input class="form-input" type="text" placeholder="Get milk..." v-model.trim="todo.title">
  </label>

  <button type="submit" title="save" class="todo-form-btn">{{ icon }}</button>
  <button type="button" title="cancel" class="todo-form-btn cancel-button" @click="close" v-if="!populateWith.empty">X</button>
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
  computed: {
    icon () {
      return this.populateWith.empty ? '+' : '✓'
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

<style scoped>
.todo-form {
  display: flex;
  margin: 24px;
  margin-bottom: 32px;
  justify-content: center;
}

.form-label {
  margin-right: 16px;
}

.form-input {
  display: block;
  margin: 8px 0;
  padding: 8px;
  border-radius: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
}

.form-input:focus {
  border: 0.5px solid #42b983;
  outline: 0;
  box-shadow: none;
}

.todo-form-btn {
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
  /* font-weight: bold; */
  align-self: flex-end;
}

.cancel-button {
  font-size: 0.83em;
}

todo-form-btn:active {
  background-color: #42b983;
  color: white;
}
</style>

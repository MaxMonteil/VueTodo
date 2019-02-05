import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    completed: [],
    dataFields: ['todos', 'completed']
  },
  mutations: {
    setState (state, { field, data }) {
      Vue.set(state, field, data)
    },
    addTodo (state, newTodo) {
      state.todos.push(newTodo)
    },
    deleteTodo (state, { todoIndex, isCompleted }) {
      if (isCompleted) {
        state.completed.splice(todoIndex, 1)
      } else {
        state.todos.splice(todoIndex, 1)
      }
    },
    completeTodo (state, todoIndex) {
      state.completed.push(state.todos.splice(todoIndex, 1)[0])
    }
  },
  actions: {
    addTodo ({ commit, dispatch }, newTodo) {
      commit('addTodo', newTodo)
      dispatch('saveTodos')
    },
    deleteTodo ({ commit, dispatch }, todoInfo) {
      commit('deleteTodo', todoInfo)
      dispatch('saveTodos')
    },
    completeTodo ({ commit, dispatch }, todoIndex) {
      commit('completeTodo', todoIndex)
      dispatch('saveTodos')
    },
    checkStorage ({ state, commit }) {
      state.dataFields.forEach(field => {
        if (localStorage.getItem(field)) {
          try {
            commit('setState', {
              field,
              data: JSON.parse(localStorage.getItem(field))
            })
          } catch (e) {
            localStorage.removeItem(field)
          }
        }
      })
    },
    saveTodos ({ state, commit }) {
      state.dataFields.forEach(field => 
        localStorage.setItem(field, JSON.stringify(state[field]))
      )
    }
  }
})

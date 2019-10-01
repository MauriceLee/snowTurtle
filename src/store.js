import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Todolist
const LS = {
  load() {
    return JSON.parse(localStorage.getItem('todos') || '[]')
  },
  save(data) {
    localStorage.setItem('todos', JSON.stringify(data))
  }
}
const filter = {
  todolist(todos) {
    return todos
  },
  active(todos) {
    return todos.filter(todo => !todo.complete)
  },
  complete(todos) {
    return todos.filter(todo => todo.complete)
  }
}

export default new Vuex.Store({
  strict: true,
  state: {
    // Todolist
    todos: []
  },
  getters: {
    todoIndex(state) {
      const pattern = new RegExp('todolist|active|complete')
      if (state.route.name.match(pattern)) {
        return filter[state.route.name](state.todos).map(todo =>
          state.todos.indexOf(todo)
        )
      }
    }
  },
  mutations: {
    // Todolist
    SET_TODOS(state, data) {
      state.todos = data
      // save LS
      LS.save(state.todos)
    },
    ADD_TODO(state, data) {
      state.todos.push(data)
      LS.save(state.todos)
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1)
      LS.save(state.todos)
    },
    UPDATE_TODO(state, { index, data }) {
      state.todos[index].content = data.content
      state.todos[index].complete = data.complete
      LS.save(state.todos)
    }
  },
  actions: {
    // Todolist
    INIT_TODOS({ commit }) {
      // load LS
      commit('SET_TODOS', LS.load())
    }
  }
})

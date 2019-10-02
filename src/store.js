import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// localstorage
const LS = {
  load: {
    equipment() {
      return JSON.parse(localStorage.getItem('buyCarts') || '[]')
    },
    todolist() {
      return JSON.parse(localStorage.getItem('todos') || '[]')
    }
  },
  save: {
    equipment(data) {
      localStorage.setItem('buyCarts', JSON.stringify(data))
    },
    todolist(data) {
      localStorage.setItem('todos', JSON.stringify(data))
    }
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
    // Equipment
    fields: ['#', 'Item', 'Price', 'Number', 'Total', 'Check'],
    carts: [
      {
        Item: 'Snowboard',
        Price: 6999,
        discount: true,
        src: require('@/assets/img4.jpg'),
        text: 'Your best and important friend for snowboarding.',
        Number: 0
      },
      {
        Item: 'Clothes',
        Price: 2000,
        discount: false,
        src: require('@/assets/img5.jpg'),
        text: 'Keep your body warm and protect your body.',
        Number: 0
      },
      {
        Item: 'Goggles',
        Price: 780,
        discount: false,
        src: require('@/assets/img6.jpg'),
        text: 'Protect your eyes and let you see clearly.',
        Number: 0
      }
    ],
    buyCarts: [],
    // Todolist
    todos: []
  },
  getters: {
    todoIndex(state) {
      // 因為上面的filter這個function裡面只有對應三個route的處理方式
      // 如果切到其他分頁時，他抓到的name並沒有被定義，所以會報錯
      const pattern = new RegExp('todolist|active|complete')
      if (state.route.name.match(pattern)) {
        return filter[state.route.name](state.todos).map(todo =>
          state.todos.indexOf(todo)
        )
      }
    }
  },
  mutations: {
    // ********** Equipment Start **********
    SET_BUYCARTS(state, data) {
      state.buyCarts = data
      LS.save.equipment(state.buyCarts)
    },
    MINUS_CART_NUMBER(state, index) {
      state.carts[index].Number--
    },
    PLUS_CART_NUMBER(state, index) {
      state.carts[index].Number++
    },
    BUY_CART(state, index) {
      let findItem = state.buyCarts.find(
        buyCart => buyCart.Item === state.carts[index].Item
      )
      let findNumber = JSON.parse(JSON.stringify(state.carts[index]))
      if (findItem === undefined) {
        let findIndex = state.buyCarts.length
        state.buyCarts.push(state.carts[index])
        state.buyCarts[findIndex].Number = findNumber.Number
        state.buyCarts[findIndex]['#'] = findIndex + 1
      } else {
        state.buyCarts[findItem['#'] - 1].Number += state.carts[index].Number
      }
      state.carts[index].Number = 0
      LS.save.equipment(state.buyCarts)
    },
    // ********** Equipment End **********

    // ********** Todolist Start **********
    SET_TODOS(state, data) {
      state.todos = data
      // save LS
      LS.save.todolist(state.todos)
    },
    ADD_TODO(state, data) {
      state.todos.push(data)
      LS.save.todolist(state.todos)
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1)
      LS.save.todolist(state.todos)
    },
    UPDATE_TODO(state, { index, data }) {
      // state.todos[index] = data 不可以這樣寫
      //因為他的陣列內容是一包東西(物件)，只會通知物件更新，但不知道更新(深層)什麼
      state.todos[index].content = data.content
      state.todos[index].complete = data.complete
      LS.save.todolist(state.todos)
    }
    // ********** Todolist End **********
  },
  actions: {
    // ********** Equipment Start **********
    INIT_BUYCARTS({ commit }) {
      commit('SET_BUYCARTS', LS.load.equipment())
    },
    // ********** Equipment End **********

    // ********** Todolist Start **********
    INIT_TODOS({ commit }) {
      // load LS
      commit('SET_TODOS', LS.load.todolist())
    }
    // ********** Todolist End **********
  }
})

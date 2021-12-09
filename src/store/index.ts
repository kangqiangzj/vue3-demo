import { createStore, createLogger } from 'vuex'
import { INCREMENT, DECREMENT } from './mutations-type'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    storeCount: 0
  },
  mutations: {
    [INCREMENT] (state) {
      state.storeCount++
    },
    [DECREMENT] (state) {
      state.storeCount--
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: debug ? [createLogger()] : []
})

/*
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-29 20:52:50
 * @FilePath: \vue3-demo\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { INCREMENT, DECREMENT } from './mutations-type'
import { GlobalDataProps, TemplateProps } from './types'

const debug = process.env.NODE_ENV !== 'production'

const testData: TemplateProps[] = [
  { id: 1, title: 'zhangsan' },
  { id: 2, title: 'lisi' }
]
export default createStore<GlobalDataProps>({
  state: {
    storeCount: 0,
    tempaltes: testData,
    user: { isLogin: false }
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

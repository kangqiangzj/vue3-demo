/*
 * @Description: commonModule
 * @Author: zhangjie
 * @Date: 2022-01-07 15:22:26
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-07 16:08:16
 * @FilePath: \vue3-demo\src\store\modules\common.ts
 */
import { Module } from 'vuex'
import { GlobalDataProps } from '../index'
import { INCREMENT, DECREMENT } from '../mutations-type'
export interface CommonProps {
  storeCount:number
}

const common:Module<CommonProps, GlobalDataProps> = {
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
  getters: {
    getValue: (state, getters, rootState) => () => {
      return state.storeCount
    }
  }
}

export default common

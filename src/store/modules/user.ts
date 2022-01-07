/*
 * @Description: user模块
 * @Author: zhangjie
 * @Date: 2022-01-07 10:37:33
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-07 14:55:59
 * @FilePath: \vue3-demo\src\store\modules\user.ts
 */
import { Module } from 'vuex'
import { GlobalDataProps } from '../index'

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const user:Module<UserProps, GlobalDataProps> = {
  mutations: {
    login (state, val) {
      state.isLogin = val.isLogin
      state.userName = 'zhangsan'
    },
    logout (state, val) {
      state.isLogin = val.isLogin
    }
  }
}
export default user

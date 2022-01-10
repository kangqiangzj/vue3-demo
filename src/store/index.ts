/*
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-07 16:59:41
 * @FilePath: \vue3-demo\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'

// modules
import user, { UserProps } from './modules/user'
import templates, { TemplatesProps } from './modules/templates'
import common, { CommonProps } from './modules/common'
import editor, { EditorProps } from './modules/editors'
export interface GlobalDataProps {
  user: UserProps;
  tempaltes: TemplatesProps;
  common:CommonProps;
  editor:EditorProps
}

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  actions: {
  },
  modules: {
    user,
    templates,
    common,
    editor
  },
  plugins: debug ? [createLogger()] : []
})

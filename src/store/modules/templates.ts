/*
 * @Description: templates模块
 * @Author: zhangjie
 * @Date: 2022-01-07 10:36:42
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-07 16:04:20
 * @FilePath: \vue3-demo\src\store\modules\templates.ts
 */
import { Module } from 'vuex'
import { GlobalDataProps } from '../index'

export interface TemplateProps {
  id: number;
  title: string;
}

const testData: TemplateProps[] = [
  { id: 1, title: 'zhangsan' },
  { id: 2, title: 'lisi' }
]

export interface TemplatesProps {
  data:TemplateProps[]
}

const templates:Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id:number) => {
      return state.data.find(t => t.id === id)
    }
  }
}

export default templates

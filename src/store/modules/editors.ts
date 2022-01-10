/*
 * @Description: editor模块
 * @Author: zhangjie
 * @Date: 2022-01-07 16:28:48
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 16:00:30
 * @FilePath: \vue3-demo\src\store\modules\editors.ts
 */

import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { GlobalDataProps } from '../index'
import { TextComponentProps } from '../../defaultProps'

export interface ComponentData {
  props:{[key:string]:any}
  // id,uuid v4生成
  id:string
  // 业务组件库名称 l-text，l-image等
  name:string
}

export interface EditorProps {
  // 供中间编辑器渲染的数组
  components:ComponentData[]
  currentElement:string
}

export const testComponents:ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', position: 'relative' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px', position: 'relative' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '15px', position: 'relative', actionType: 'url', url: 'https://www.baidu.com/' } }
]

const editor:Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  },
  mutations: {
    addComponents (state, props:Partial<TextComponentProps>) { // Partial简单理解为只包含TextComponentProps部分属性
      const newComponent:ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props
      }
      state.components.push(newComponent)
    },
    setActive (state, curentId) {
      state.currentElement = curentId
    }
  },
  // getters是基于state的计算属性
  getters: {
    getCurrentElement: (state) => {
      return state.components.find((item) => item.id === state.currentElement)
    }
  }
}

export default editor

/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-01-10 16:16:12
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 17:09:23
 * @FilePath: \vue3-demo\src\propsMap.ts
 */
import { TextComponentProps } from './defaultProps'
export interface PropsToForm {
  component:string,
  value?:string
}

export type PropsToForms = {
  [p in keyof TextComponentProps]?:PropsToForm
}

export const mapPropsToForm:PropsToForms = {
  text: {
    component: 'a-input'
  }
}

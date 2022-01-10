/*
 * @Description: 组件通用配置
 * @Author: zhangjie
 * @Date: 2022-01-10 09:29:44
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 15:11:45
 * @FilePath: \vue3-demo\src\defaultProps.ts
 */

import { mapValues, without } from 'lodash-es'

export interface CommonComponentProps {
  // actions
  actionType: string,
  url: string,
  // size
  height: string,
  width: string,
  paddingLeft: string,
  paddingRight: string,
  paddingTop: string,
  paddingBottom: string,
  // border type
  borderStyle: string,
  borderColor: string,
  borderWidth: string,
  borderRadius: string,
  // shadow and opacity
  boxShadow: string,
  opacity: string,
  // position and x,y
  position: string,
  left:string,
  top: string,
  right: string,
}

export interface TextComponentProps extends CommonComponentProps{
   // basic props - fonr styles
   text: string,
   fontSize: string,
   fontFamily: string,
   fontWeight: string,
   fontStyle: string,
   textDecoration: string,
   lineHeight:string,
   color: string,
   backgroundColor: string,
}

export const commonDefaultProps:CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}

export const textDefaultProps:TextComponentProps = {
  // basic props - fonr styles
  text: '文本内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

// 获取所有属性name
export const textStylePropNames = without(Object.keys(textDefaultProps), 'text', 'actionType', 'url')

// export const transformToComponentProps = <T extends {[key:string]:any}>(props:T) => { // <T extends {[key:string]:any}> 泛型类型约束，参数必须满足extends之后的要求才能作为参数
export const transformToComponentProps = (props:TextComponentProps) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor as StringConstructor,
      default: item
    }
  })
}

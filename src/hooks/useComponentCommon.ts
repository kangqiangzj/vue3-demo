/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-01-10 10:30:51
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 15:07:08
 * @FilePath: \vue3-demo\src\hooks\useComponentCommon.ts
 */
import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '../defaultProps'
// const useComponentCommon = <T extends {[key:string]:any}>(props:T, picks:string[]) => {//props定义为indexabletype类型 {[key:string]:any}
const useComponentCommon = (props:Readonly<Partial<TextComponentProps>>, picks:string[]) => {
  console.log('props', props)
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon

/*
 * @Description: vnode组件写法
 * @Author: zhangjie
 * @Date: 2022-01-18 16:03:16
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-18 16:25:23
 * @FilePath: \vue3-demo\src\components\vNode\RenderVnode.ts
 */
import { defineComponent } from 'vue'

const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [Object, String],
      required: true
    }
  },
  render () {
    console.log('vnode---------', this.vNode)
    return this.vNode
  }
})

export default RenderVnode

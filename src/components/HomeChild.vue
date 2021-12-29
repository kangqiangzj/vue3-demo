<!--
 * @Author: zhangjie
 * @Date: 2021-12-07 15:21:59
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-29 21:02:13
 * @FilePath: \vue3-demo\src\components\HomeChild.vue
-->

<template>
    <div>
        <p>home child --- {{propsName}}</p>
        <button type="button" @click="clickHandler">-</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue'
import { TemplateProps } from '../store/types'
export default defineComponent({
  props: {
    propsName: Number,
    list: {
      type: Array as PropType<TemplateProps[]>
    }
  },
  emits: ['minus-event'], // 注冊組件的emits方法，表示组件上定义的已发出的事件的名称
  // setup选项中没有this（在执行setup时，尚未创建组件的实例），无法访问组件声明中的属性
  setup (props, ctx) {
    console.log('this: ', this)
    // props不能直接使用es6的结构，会使props失去响应性
    // 如果需要结构，可以使用setup函数中的toRefs来完成，保持响应性
    const { propsName } = toRefs(props)
    console.log('propsName: ', propsName)
    const { attrs } = ctx
    console.log('attrs: ', attrs) // 快捷打印console：ctrl+shift+L  删除所有console：ctrl+shift+D
    const clickHandler = () => {
      ctx.emit('minus-event')
    }
    return {
      clickHandler
    }
  }
})
</script>

<style scoped>

</style>

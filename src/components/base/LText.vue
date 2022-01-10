<!--
 * @Description: LText組件
 * @Author: zhangjie
 * @Date: 2022-01-07 17:23:18
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 14:21:04
 * @FilePath: \vue3-demo\src\components\base\LText.vue
-->
<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">
    {{text}}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '../../hooks/useComponentCommon'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '../../defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps)
export default defineComponent({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup (props) {
    const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
    console.log('styleProps: ', styleProps)

    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped lang="scss">
.l-text-component{
  position: relative !important;
}
</style>

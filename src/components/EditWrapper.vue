<!--
 * @Description: 中间预览区域，容器组件
 * @Author: zhangjie
 * @Date: 2022-01-10 15:41:10
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-11 10:13:58
 * @FilePath: \vue3-demo\src\components\EditWrapper.vue
-->
<template>
  <div class="edit-wrap" @click="onItemClick(id)" :class="{active:active}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'edit-wrapper',
  props: {
    id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['set-active'],
  setup (props, context) {
    const onItemClick = (id:string) => {
      context.emit('set-active', id)
    }
    return {
      onItemClick
    }
  }
})
</script>

<style scoped lang="scss">
.edit-wrap{
  padding: 0;
  cursor: pointer;
  border:1px solid transparent;
  user-select: none;
  &:hover{
    border: 1px dashed red;
  }
  &.active{
    border: 1px solid #1890ff;
    user-select: none;
  }
}

</style>

<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-01-10 11:20:16
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 14:35:12
 * @FilePath: \vue3-demo\src\components\ComponentList.vue
-->
<template>
  <div class="create-component-list" v-for="(item, index) in list" :key="index" @click="handleCompItemClick(item)">
    <l-text v-bind="item"></l-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LText from '../components/base/LText.vue'
export default defineComponent({
  name: 'component-list',
  components: { LText },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emit: ['on-item-click'],
  setup (props, context) {
    const handleCompItemClick = (data:any) => {
      context.emit('on-item-click', data)
    }
    return {
      handleCompItemClick
    }
  }
})
</script>

<style scoped></style>

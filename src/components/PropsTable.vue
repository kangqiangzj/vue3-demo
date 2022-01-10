<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-01-10 17:09:45
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 18:07:22
 * @FilePath: \vue3-demo\src\components\PropsTable.vue
-->
<template>
  <div>
    <div class="props-table">
      <div v-for="(value,key) in finalProps" :key="key" class="prop-item">
         <component v-if="value" :is="value.component" :value="value.value"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { reduce } from 'lodash-es'
import { PropsToForms, mapPropsToForm } from '../propsMap'
import { TextComponentProps } from '../defaultProps'
import { Input } from 'ant-design-vue'
export default defineComponent({
  components: {
    AInput: Input
  },
  name: 'props-table',
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true
    }
  },
  setup (props) {
    const finalProps = computed(() => {
      return reduce(props.props, (result, value, key) => {
        const newKey = key as keyof TextComponentProps
        const item = mapPropsToForm[newKey]
        if (item) {
          item.value = value
          result[newKey] = item
        }
        return result
      }, {} as PropsToForms)
    })
    return {
      finalProps
    }
  }
})
</script>

<style scoped>

</style>

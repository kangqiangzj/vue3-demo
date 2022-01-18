<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-01-10 17:09:45
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-18 16:07:52
 * @FilePath: \vue3-demo\src\components\PropsTable.vue
-->
<template>
  <div>
    <div class="props-table">
      <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
        <span class="label" v-if="value.text">{{ value.text }}：</span>
        <div class="prop-component">
          <component
            v-if="value"
            :is="value.component"
            :[value.valueProp]="value.value"
            v-bind="value.extraProps"
            v-on="value.events"
          >
            <template v-if="value.options">
              <component
                :is="value.subComponent"
                v-for="(option, index) in value.options"
                :key="index"
                :value="option.value"
              >
                <!-- {{ option.text }} -->
                <render-vnode :vNode="option.text"></render-vnode>
              </component>
            </template>
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, VNode } from 'vue'
import { reduce } from 'lodash-es'
import { PropsToForms, mapPropsToForm } from '../propsMap'
import { TextComponentProps } from '../defaultProps'
import RenderVnode from './vNode/RenderVnode'
interface FormProps {
  component: string
  subComponent?: string
  value: string
  extraProps?: { [key: string]: any }
  text?: string
  options?: { text: string | VNode; value: any }[]
  initialTransform?: (v: any) => any
  valueProp: string
  eventName: string
  events: { [key: string]: (e: any) => void }
}
export default defineComponent({
  components: {
    RenderVnode
  },
  name: 'props-table',
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true
    }
  },
  emits: ['change'],
  setup (props, context) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const newKey = key as keyof TextComponentProps
          const item = mapPropsToForm[newKey]
          if (item) {
            const { valueProp = 'value', eventName = 'change', initialTransform, afterTransform } = item
            const newItem:FormProps = {
              ...item,
              value: initialTransform ? initialTransform(value) : value,
              valueProp,
              eventName,
              events: {
                [eventName]: (e:any) => { context.emit('change', { key, value: afterTransform ? afterTransform(e) : e }) }
              }
            }

            result[newKey] = newItem
          }
          return result
        },
        {} as {[key:string]:FormProps}
      ) // Required 将可选变为必选
    })
    return {
      finalProps
    }
  }
})
</script>

<style scoped lang="scss">
.prop-item {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}
.prop-component{
 flex: 1;
}
</style>

/*
 * @Description: propsTable的tsx版本 -- 右侧组件编辑栏目
 * @Author: zhangjie
 * @Date: 2022-01-18 09:19:51
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-18 15:43:38
 * @FilePath: \vue3-demo\src\components\tsx\PropsTable.tsx
 */
import { computed, defineComponent, PropType, VNode } from 'vue'
import { reduce } from 'lodash-es'
import { PropsToForms, mapPropsToForm } from '../../propsMap'
import { TextComponentProps } from '../../defaultProps'
import { Input, InputNumber, Radio, Slider, Select } from 'ant-design-vue'
import './PropsTable.scss'
const mapToComponent = {
  'a-textarea': Input.TextArea,
  'a-input-number': InputNumber,
  'a-slider': Slider,
  'a-radio-group': Radio.Group,
  'a-radio-button': Radio.Button,
  'a-select': Select,
  'a-select-option': Select.Option
} as any

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
function capitalizeFirstLetter (string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export default defineComponent({
  components: {
    // Input,
    // InputNumber,
    // Slider,
    // Radio,
    // Select
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
                ['on' + capitalizeFirstLetter(eventName)]: (e:any) => { context.emit('change', { key, value: afterTransform ? afterTransform(e) : e }) }
              }
            }

            result[newKey] = newItem
          }
          return result
        },
        {} as {[key:string]:FormProps}
      ) // Required 将可选变为必选
    })
    // return {
    //   finalProps
    // }
    return () =>
      <div class="props-table">{
        Object.keys(finalProps.value).map(key => {
          const value = finalProps.value[key]
          const ComponentName = mapToComponent[value.component]
          const SubComponent = value.subComponent ? mapToComponent[value.subComponent] : null
          const props = {
            [value.valueProp]: value.value,
            ...value.extraProps,
            ...value.events
          }
          return (
            <div key={key} class="prop-item">
              {value.text && <span class="label">{value.text}</span>}
              <div class="prop-component">
                <ComponentName {...props}>
                  {
                    value.options &&
                    value.options.map(option => {
                      return (
                        <SubComponent value={option.value}>{option.text}</SubComponent>
                      )
                    })
                  }
                </ComponentName>
              </div>
            </div>
          )
        })
      }</div>
  }
})

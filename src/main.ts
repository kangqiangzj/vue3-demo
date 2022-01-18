/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-18 08:57:45
 * @FilePath: \vue3-demo\src\main.ts
 */

import { createApp, h } from 'vue'
import {
  Button,
  Input,
  Slider,
  InputNumber,
  Radio,
  Select
  // RadioGroup
  // RadioButton,
  // Textarea
} from 'ant-design-vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'ant-design-vue/dist/antd.css'

const node = h('div', { class: 'test' }, 'hello there')
console.log(node)
const app = createApp(App)

// app.use(Antd)
app.use(router)
app.use(store)
app.use(Button)
  .use(Input)
  .use(Slider)
  .use(InputNumber)
  .use(Radio)
  // .use(Textarea)
  // .use(RadioGroup)
  // .use(RadioButton)
  .use(Select)
app.mount('#app')

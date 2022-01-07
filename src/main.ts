/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-06 17:43:43
 * @FilePath: \vue3-demo\src\main.ts
 */

import { createApp } from 'vue'
// import { Button, Input } from 'ant-design-vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

// app.use(Antd)
app.use(router)
app.use(store)
// app.use(Button)
//   .use(Input)
app.mount('#app')

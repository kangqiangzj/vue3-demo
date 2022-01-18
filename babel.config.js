/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-11 15:51:24
 * @FilePath: \vue3-demo\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }] // `style: true` 会加载 less 文件
  ]
}

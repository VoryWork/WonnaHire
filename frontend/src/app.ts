import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from '@nutui/nutui-taro';

import './app.styl'

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia()).use(Button)

export default App

import type { App } from 'vue'
import XButton from './Button/XButton.vue'

const coms = [XButton]

// 批量组件注册
const install = function (app: App) {
  coms.forEach((com) => {
    app.component(com.name as string, com)
  })
}

export default { install }

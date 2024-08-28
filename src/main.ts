import { createApp } from 'vue'
import '@/assets/style/reset.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";//国际化
import { createPinia } from 'pinia'


const app = createApp(App)
// 实例化pinia
const pinia = createPinia()


app
  .use(ElementPlus, { locale: zhCn })
  .use(router)
  .use(pinia)
  .mount('#app')


  //全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


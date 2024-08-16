import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VButton from './components/VButton.vue'
import VText from './components/VText.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import VueDragResize from 'vue-drag-resize/src'

 
app.component('VueDragResize', VueDragResize)
app.component('VButton', VButton)
app.component('VText', VText)
app.mount('#app')

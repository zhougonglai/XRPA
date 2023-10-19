import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import router from './router/index.ts'
import './main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(MotionPlugin)
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))



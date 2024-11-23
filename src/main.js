import App from '@/App.vue'
import { router } from '@/router/router.js'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import '../src/assets/styles/style.scss'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')

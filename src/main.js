import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '../src/assets/styles/style.scss';
import App from '@/App.vue';
import { router } from '@/router/router.js'

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app')

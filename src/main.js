import { createApp } from 'vue';
import './assets/styles/style.scss';
import App from './App.vue';

import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPageView from './components/views/LoginPageView.vue'
import MainPageView from "./components/views/MainPageView.vue";
import GamePageView from "./components/views/GamePageView.vue";

export const routes = [
	{ path: '/login', component: LoginPageView },
	{ path: '/main', component: MainPageView },
	{ path: '/game', component: GamePageView },
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

createApp(App).use(router).mount('#app')

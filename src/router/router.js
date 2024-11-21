import { createMemoryHistory, createRouter } from 'vue-router';

import LoginPageView from '@components/views/LoginPageView.vue';
import MainPageView from "@components/views/MainPageView.vue";
import GamePageView from "@components/views/GamePageView.vue";

export const routes = [
	{ path: '/', component: LoginPageView },
	{ path: '/main', component: MainPageView },
	{ path: '/game', component: GamePageView },
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

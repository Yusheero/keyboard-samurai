import DifficultPageView from '@/components/views/DifficultPageView.vue';
import GamePageView from '@/components/views/GamePageView.vue';
import LoginPageView from '@/components/views/LoginPageView.vue';
import MainMenuView from '@/components/views/MainMenuView.vue';
import SettingsPageView from '@/components/views/SettingsPageView.vue';
import StatsPageView from '@/components/views/StatsPageView.vue';

import { createMemoryHistory, createRouter } from 'vue-router'

export const routes = [
  { path: '/', component: LoginPageView },
  { path: '/main', component: MainMenuView },
  { path: '/game', component: GamePageView },
  { path: '/difficult', component: DifficultPageView },
  { path: '/stats', component: StatsPageView },
  { path: '/settings', component: SettingsPageView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

import { defineStore } from 'pinia';

export const useKeyboardStore = defineStore('keyboard', {
  state: () => {
    return {
      difficult: 1,
      name: '',
    }
  },
})
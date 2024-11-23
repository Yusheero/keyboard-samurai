import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeyboardStore = defineStore('keyboard', () => {
  const difficult = ref(1)
  const name = ref()

  return { difficult, name }
})

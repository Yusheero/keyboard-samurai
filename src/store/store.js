import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeyboardStore = defineStore('keyboard', () => {
  const difficult = ref('easy')
  const name = ref()

  return { difficult, name }
})

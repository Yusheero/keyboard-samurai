import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeyboardStore = defineStore('keyboard', () => {
  const difficult = ref('easy')
  const name = ref()
  const textInput = ref('value from store')

  return { difficult, name,textInput }
})

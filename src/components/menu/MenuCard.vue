<script setup>
import { useKeyboardStore } from '@/store/store.js'
import { ref } from 'vue'

defineProps({
  card: Object,
})

const store = useKeyboardStore()

/** Установка сложности игры */
function setDifficult(dif) {
  store.difficult = dif
}
</script>

<template>
  <div class="card">
    <button @click="setDifficult(card.difficult)" class="button card__button">{{ card.difficult }}</button>
  </div>
</template>

<style scoped lang="scss">
.card {
  display:         flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &__button {
    height: 200px;
    width: 200px;
    font-size: 20px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

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
    <img class="card__image" :src="card.image">
    <button @click="setDifficult(card.difficult)" class="card__button">{{ card.difficult }}</button>
  </div>
</template>

<style scoped lang="scss">
.card {
  height: 400px;
  width: 200px;
  display:         flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 3px solid var(--snow);
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    -webkit-box-shadow: 0px 0px 20px 12px rgba(249, 249, 249, 0.4);
    -moz-box-shadow: 0px 0px 20px 12px rgba(249, 249, 249, 0.4);
    box-shadow: 0px 0px 20px 12px rgba(249, 249, 249, 0.4);
    transition: box-shadow .5s;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__button {
    position: absolute;
    bottom: 0px;
    color: var(--snow);
    font-size: 24px;
    width: 100%;
    height: 100%;
    border: unset;
    background-color: unset;
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 30px;
    font-weight: 600;
    @include font-family-600;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

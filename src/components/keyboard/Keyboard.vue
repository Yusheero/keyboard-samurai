<script setup>
import Key from './Key.vue'
</script>

<template>
  <div class="keyboard">
    <div class="keyboard__row">
      <Key :itemValue="'ESC'" />
      <Key :itemValue="'1'" />
      <Key :itemValue="'2'" />
      <Key :itemValue="'3'" />
      <Key :itemValue="'4'" />
      <Key :itemValue="'5'" />
      <Key :itemValue="'6'" />
      <Key :itemValue="'7'" />
      <Key :itemValue="'8'" />
      <Key :itemValue="'9'" />
      <Key :itemValue="'0'" />
      <Key :itemValue="'-'" />
      <Key :itemValue="'='" />
      <Key :itemValue="'<-'" :itemClass="'backspace'" />
    </div>
  </div>
</template>

<style scoped>
.keyboard {
  display: flex;

  &__row {
    width: 1500px;
    height: 70px;
  }
}
</style>

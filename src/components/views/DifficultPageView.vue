<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Menu from '@/components/menu/Menu.vue'

import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore()
</script>

<template>
  <div class="main-page">
    <Header router-path="main" />
    <div class="main-page__content">
      <Menu />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.main-page {
  display:             flex;
  flex-direction:      column;
  width:               100%;
  height:              100vh;
  background-color:    var(--imperator);
  
  &__content {
    height:          90%;
    display:         flex;
    flex-direction:  column;
    justify-content: center;
    align-items:     center;
    gap:             5px;
    @include poppins-600;
  }
}
</style>

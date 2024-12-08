<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

</script>

<template>
  <div class="stats-page">
    <Header router-path="main" />
    <div class="stats-page__content">
      STATS
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.stats-page {
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

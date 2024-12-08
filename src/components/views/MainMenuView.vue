<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore()
</script>

<template>
  <div class="main-page">
		<Header />
		<div class="main-page__content">
			<router-link class="button main-page__button" to="/difficult">START GAME</router-link>
			<router-link class="button main-page__button" to="/stats">STATS</router-link>
			<router-link class="button main-page__button" to="/settings">SETTINGS</router-link>
		</div>
		<Footer />
  </div>
</template>

<style scoped lang="scss">
.main-page {
	display:          flex;
	flex-direction:   column;
	width:            100%;
	height:           100vh;
	background-color: var(--imperator);

	&__content {
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap:             16px;
		@include poppins-600;
	}

	&__button {
		width: 200px;
	}
}
</style>

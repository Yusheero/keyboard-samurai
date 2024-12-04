<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Keyboard from '@/components/keyboard/Keyboard.vue'
import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore()
</script>

<template>
  <div class="game-page">
    <Header />
    <div class="game-page__content">
			<input class="game-page__window" v-model="store.textInput" type="text">
			<Keyboard class="keyboard" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.game-page {
	display:             flex;
	flex-direction:      column;
	width:               100%;
	height:              100vh;
	background-color:    var(--imperator);
	@include font-family-600;

	&__content {
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap: 20px;
	}

	&__window {
		background-color: #fff;
		border-radius: 8px;
		width: 790px;
		height: 100px;
	}
}

.table {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

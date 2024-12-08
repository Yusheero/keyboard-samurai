<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Keyboard from '@/components/keyboard/Keyboard.vue'
import { useKeyboardStore } from '@/store/store.js'
import { onMounted } from 'vue';

/** Объявление хранилища */
const store = useKeyboardStore()
</script>

<template>
  <div class="game-page">
    <Header router-path="main" />
    <div class="game-page__content">
			<div class="game-page__difficult">{{ store.difficult }}</div>
			<div class="game-page__text">{{ store.text }}</div>
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
	@include dm-sans-700;

	&__content {
		position: relative;
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap: 20px;
	}

	&__difficult {
		position: absolute;
		top: 70px;
		right: 435px;
		background-color: var(--sparrow);
		padding: 10px;
		border-radius: 5px;
		color: #fff;
	}

	&__text {
		width: 890px;
		height: 300px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding: 30px;
		border-radius: 8px;
		line-height: 20px;
		@include sans-600;
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

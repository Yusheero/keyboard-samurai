<script setup>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import { useRouter } from 'vue-router';

import { useKeyboardStore } from '@/store/store.js'

const router = useRouter();
const store = useKeyboardStore();

function goToStart() {
	if (!store.name) {
		return
	}

	router.push('/main');
}
</script>

<template>
	<div class="login-page">
		<Header /> 
		<div class="login-page__content">
			<div class="login-page__title">{{ 'Call Yourself, Samurai' }}</div>
			<input v-model="store.name" @keydown.enter="goToStart" class="login-page__input" type="text">
			<button class="login-page__button" @click="goToStart">Let's Start</button>
		</div>
		<Footer />
	</div>
</template>

<style lang="scss">
@import '@assets/styles/style';

.login-page {
	display:             flex;
	flex-direction:      column;
	width:               100%;
	height:              100vh;
	background-color:    $imperator;
	@extend %font-family;

	&__content {
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap:             10px;
	}

	&__title {
		font-size: 20px;
	}

	&__input {
		border:        2px solid $snow;
		border-radius: 5px;
		width:         300px;
		height:        30px;
		background-color: $imperator;
		padding: 10px;
		font-size: 18px;
		@extend %font-family;
	}

	&__button {
		border:        2px solid $snow;
		border-radius: 5px;
		width:         320px;
		height:        40px;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		background-color: $sparrow;
		color: $snow;
		text-decoration: none;
		@extend %font-family;

		&:hover {
			background-color: $sparrow-light;
		}

		&:active {
			background-color: $sparrow-dark;
		}
	}
}
</style>

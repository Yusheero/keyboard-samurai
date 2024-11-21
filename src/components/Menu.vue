<script setup>
import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore()

/** Установка сложности игры */
const setDifficult = (dif) => {
	console.log('Установка сложности');
	store.difficult = dif;
}
</script>

<template>
	<div class="menu__wrapper">
		<h2 class="menu__title">{{ 'Set Difficult' }}</h2>
		<div class="menu__cards">

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat1"></div>
				<button class="menu__button" @click="setDifficult(1)">EASY</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat2"></div>
				<button class="menu__button" @click="setDifficult(2)">MIDDLE</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat3"></div>
				<button class="menu__button" @click="setDifficult(3)">HARD</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat4"></div>
				<button class="menu__button" @click="setDifficult(3)">HARDCORE</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat5"></div>
				<button class="menu__button" @click="setDifficult(3)">GOD</button>
			</div>

		</div>

		<router-link class="menu__button router__button" to="/game">Start Training</router-link>
	</div>
</template>

<style scoped lang="scss">
@import '../assets/styles/style';

.menu {
	&__wrapper {
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap: 64px;
	}

	&__title {
		font-size: 20px;
		color: $snow;
	}

	&__cards {
		display:         flex;
		flex-direction:  row;
		justify-content: center;
		align-items:     center;
		gap: 48px;
	}

	&__card {
		display:         flex;
		flex-direction: column;
		gap: 6px;
	}

	&__card-image {
		width: 200px;
		height: 200px;
		border: 2px solid $snow;
		border-radius: 7px;
		background-size:  contain;
	}

	&__card-image-cat1 {
		background-image: url("../assets/images/cat_1.jpg");
	}

	&__card-image-cat2 {
		background-image: url("../assets/images/cat_2.jpg");
	}

	&__card-image-cat3 {
		background-image: url("../assets/images/cat_3.jpg");
	}

	&__card-image-cat4 {
		background-image: url("../assets/images/cat_4.jpg");
	}

	&__card-image-cat5 {
		background-image: url("../assets/images/cat_5.jpg");
	}

	&__button {
		border:        2px solid $snow;
		border-radius: 5px;
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
			cursor: pointer;
		}

		&:active {
			background-color: $sparrow-dark;
		}
	}
}
</style>

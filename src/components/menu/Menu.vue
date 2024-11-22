<script setup>
import { useKeyboardStore } from '@/store/store.js'
import MenuCard from '@/components/menu/MenuCard.vue';
import { ref } from 'vue';

const store = useKeyboardStore()

/** Данные для карточек с сложностью */
const cards = ref([
	{ difficult: 'easy', image: '-cat1' },
	{ difficult: 'middle', image: '-cat2' },
	{ difficult: 'hard', image: '-cat3' },
	{ difficult: 'hardcore', image: '-cat4' },
	{ difficult: 'god', image: '-cat5' }
]);

/** Установка сложности игры */
const setDifficult = (dif) => {
	console.log('Установка сложности');
	store.difficult = dif;
}
</script>

<template>
	<div class="menu__wrapper">
		<div class="menu__cards">
			<MenuCard :cards="cards"></MenuCard>
		</div>

		<router-link class="menu__button router__button" to="/game">Start Training</router-link>
	</div>
</template>

<style scoped lang="scss">
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
		height: 400px;
		display:         flex;
		flex-direction: column;
		gap: 6px;
		border: 2px solid style.$snow;
		border-radius: 8px;
	}

	&__card-image {
		width: 200px;
		height: 200px;
		border-radius: 7px;
		background-size:  contain;
	}

	&__card-image-cat1 {
		background-image: url("../assets/images/cat_1.jpg");
	}

	&__card-image-cat2 {
		background-image: url("../assets/images/cat_3.jpg");
	}

	&__card-image-cat3 {
		background-image: url("../assets/images/cat_2.jpg");
	}

	&__card-image-cat4 {
		background-image: url("../assets/images/cat_4.jpg");
	}

	&__card-image-cat5 {
		background-image: url("../assets/images/cat_5.jpg");
	}

	&__button {
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

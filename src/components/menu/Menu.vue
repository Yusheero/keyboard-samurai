<script setup>
import image1 from '@/assets/images/cat1.jpg';
import image2 from '@/assets/images/cat2.jpg';
import image3 from '@/assets/images/cat3.jpg';
import image4 from '@/assets/images/cat4.jpg';
import image5 from '@/assets/images/cat5.jpg';
import MenuCard from '@/components/menu/MenuCard.vue'
import { useKeyboardStore } from '@/store/store.js'
import { ref } from 'vue'

const store = useKeyboardStore()

/** Данные для карточек с сложностью */
const cards = ref([
  { difficult: 'EASY', image: image1 },
  { difficult: 'MIDDLE', image: image2 },
  { difficult: 'HARD', image: image3 },
  { difficult: 'HARDCORE', image: image4 },
  { difficult: 'GOD', image: image5 },
])
</script>

<template>
  <div class="menu__wrapper">
		{{ 'Chosen Difficult: ' + store.difficult }}
    <div class="menu__cards">
      <MenuCard v-for="(card, index) of cards" :card="card" :key="index"/>
    </div>
    <router-link class="button router__button" to="/game">
      START
    </router-link>
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
		color: var(--snow);
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
		border: 2px solid var(--snow);
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
		background-color: var(--sparrow);
		color: var(--snow);
		text-decoration: none;

		&:hover {
			background-color: var(--sparrow-light);
			cursor: pointer;
		}

		&:active {
			background-color: var(--sparrow-dark);
		}
	}
}
</style>

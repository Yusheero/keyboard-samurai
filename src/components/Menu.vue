<script setup>
/** Установка сложности игры */
const setDifficult = (dif) => {
	console.log('Установка сложности');

	switch (dif) {
		case 1:
			console.log('Установлена сложность 1');
			// Мутация в стор с сложностью 1
			return
		case 2:
			console.log('Установлена сложность 2');
			// Мутация в стор с сложностью 2
			return
		case 3:
			console.log('Установлена сложность 3');
			// Мутация в стор с сложностью 3
			return
	}
}
</script>

<template>
	<div class="menu__wrapper">
		<h2 class="menu__title">{{ 'Set Difficult' }}</h2>
		<div class="menu__buttons">

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat1"></div>
				<button class="menu__button" onclick="setDifficult(1)">EASY</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat2"></div>
				<button class="menu__button" onclick="setDifficult(2)">MIDDLE</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat3"></div>
				<button class="menu__button" onclick="setDifficult(3)">HARD</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat4"></div>
				<button class="menu__button" onclick="setDifficult(3)">HARDCORE</button>
			</div>

			<div class="menu__card">
				<div class="menu__card-image menu__card-image-cat5"></div>
				<button class="menu__button" onclick="setDifficult(3)">GOD</button>
			</div>

		</div>
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
		gap: 16px;
	}

	&__title {
		font-size: 20px;
		color: $snow;
	}

	&__buttons {
		display:         flex;
		flex-direction:  row;
		justify-content: center;
		align-items:     center;
		gap: 16px;
	}

	&__card {
		border:        2px solid $snow;
		border-radius: 8px;
		width:         200px;
		height:        200px;
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
		width:         150px;
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

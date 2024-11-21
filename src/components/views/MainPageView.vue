<script setup>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import Menu from "../Menu.vue";

import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore();
</script>

<template>
	<div class="main-page">
		<Header />
		<div class="main-page__content">
			<Menu />
		</div>
		<Footer />
	</div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/style';

.main-page {
	display:             flex;
	flex-direction:      column;
	width:               100%;
	height:              100vh;
	background-color:    $gardener-dark;
	@extend %font-family;

	&__content {
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap:             5px;
	}
}
</style>

<script setup>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
</script>

<template>
	<div class="login-page">
		<Header />
		<div class="login-page__content">
			{{ 'Call Yourself, Samurai' }}
			<input class="login-page__input" type="text">
			<RouterLink class="login-page__button" to="/main">Let's Start</RouterLink>
		</div>
		<Footer />
	</div>
</template>

<style lang="scss">
@import '../../assets/styles/style';

.login-page {
	display:             flex;
	flex-direction:      column;
	width:               100%;
	height:              100vh;
	background-color:    $samurai;
	@extend %font-family;

	&__content {
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap:             10px;
	}

	&__input {
		border:        2px solid $snow;
		border-radius: 5px;
		width:         300px;
		height:        30px;
		background-color: #6f7b57;
		@extend %font-family;
	}
}
</style>

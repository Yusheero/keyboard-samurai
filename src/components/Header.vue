<script setup>
import { useRouter } from 'vue-router'

defineProps({
  routerPath: String,
})

const router = useRouter()

function buttonEvent(routerPath) {
	console.log('path changed');
  router.push('/' + routerPath);
}
</script>

<template>
  <div class="header">
		<button v-if="routerPath" class="button" @click="buttonEvent(routerPath)">BACK</button>
    <h1 class="header__title">KEYBOARD SAMURAI</h1>
		<button v-if="false" class="header__button">PROFILE</button>
  </div>
</template>

<style scoped lang="scss">
.header {
	position: relative;
	display:             flex;
	justify-content:     flex-start;
	align-items:         center;
	gap:                 750px;
	height:              10%;
	color:               var(--snow);
	background-color:    var(--sparrow);
	font-family:         "Host Grotesk", sans-serif;
	font-optical-sizing: auto;
	font-weight:         500;
	font-style:          normal;
	padding: 0 24px;

	&__title {
		position: absolute;
		left: 850px;
		font-size: 24px;
		font-weight: 700;
		@include poppins-700;
	}
}
</style>

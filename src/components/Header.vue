<script setup>

</script>

<template>
  <div class="header">
    <h1 class="header__title">KEYBOARD SAMURAI</h1>
  </div>
</template>

<style scoped lang="scss">
.header {
	display:             flex;
	justify-content:     center;
	align-items:         center;
	gap:                 10px;
	height:              10%;
	color:               var(--snow);
	background-color:    var(--sparrow);
	font-family:         "Host Grotesk", sans-serif;
	font-optical-sizing: auto;
	font-weight:         500;
	font-style:          normal;

	&__title {
		font-size: 24px;
		font-weight: 700;
		@include raleway;
	}
}
</style>

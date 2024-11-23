<script setup>

</script>

<template>
  <div class="header">
    <div class="header__title">
      {{ 'KEYBOARD SAMURAI' }}
    </div>
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
	font-weight:         600;
	font-style:          normal;

	&__title {
		font-size: 24px;
		@include font-family;
	}
}
</style>

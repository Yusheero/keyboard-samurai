<script setup>

</script>

<template>
  <div class="footer">
    <div>{{ 'Developed by Yusheero' }}</div>
    <a class="footer__link" rel="stylesheet" href="https://github.com/Yusheero" />
  </div>
</template>

<style scoped lang="scss">
.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	height: 5%;
	color: var(--snow);
	background-color: var(--sparrow);
	@include poppins-600;

	&__link {
		width: 25px;
		height: 25px;
		background-image: url("../assets/icons/github-logo-24.png");
	}
}
</style>

<script setup>
    import Header from '@components/Header.vue';
    import Footer from '@components/Footer.vue';
    import Keyboard from '@components/Keyboard.vue';
</script>

<template>
    <div class="game-page">
        <Header />
        <div class="game-page__content">
            <div class="table">
                <Keyboard class="keyboard"/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/style';

.game-page {
	display:             flex;
	flex-direction:      column;
	width:               100%;
	height:              100vh;
	background-color:    $imperator;
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

.table {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

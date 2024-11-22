<script setup>
const props = defineProps({
  cards: String
})
</script>
<template>
  <div v-for="card in cards" class="card">
    <div :class="['card__image', 'card__image' + card.image]"></div>
  </div>
</template>
<style scoped lang="scss">
.card {
  height: 400px;
  width: 200px;
  display:         flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 2px solid $snow;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 8px 10px rgba(172, 172, 172, 0.23);
    -moz-box-shadow: 0px 0px 8px 10px rgba(172, 172, 172, 0.23);
    box-shadow: 0px 0px 8px 10px rgba(172, 172, 172, 0.23);
  }

  &__image {
    width: 200px;
		height: 200px;
		background-size:  contain;
    background-repeat: no-repeat;
    background-position: center;
    scale: 2;

    &-cat1 {
      background-image: url("@assets/images/cat1.jpg");
    }

    &-cat2 {
      background-image: url("@assets/images/cat2.jpg");
    }

    &-cat3 {
      background-image: url("@assets/images/cat3.jpg");
    }

    &-cat4 {
      background-image: url("@assets/images/cat4.jpg");
    }

    &-cat5 {
      background-image: url("@assets/images/cat5.jpg");
    }
  }
}
</style>
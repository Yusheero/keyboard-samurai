<script setup>
defineProps({
  itemValue: String,
  itemClass: String,
})
</script>

<template>
  <div class="common" :class="[itemClass]">{{ itemValue }}</div>
</template>

<style scoped lang="scss">
.common {
    width: 50px;
    height: 50px;
    float: left;
    background-color: #fff;
    color: #000000;
    line-height: 48px;
    margin-left: 2px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    &__backspace {
        width: 100px;
        background-image: url(../../assets/icons/move-left.svg);
        background-repeat: no-repeat;
        background-position: center;
    }

    &__backspace {
        width: 100px;
    }

    &__tab {
        width: 75px;
    }

    &__slash {
        width: 75px;
    }

    &__caps {
        width: 90px;
    }

    &__enter {
        width: 114px;
    }

    &__shift-left {
        width: 128px;
    }

    &__shift-right {
        width: 100px;
    }

    &__space {
        width: 303px;
    }

    &__ctrl {
        width: 70px;
    }

    &__win {
        width: 70px;
        background-image: url(../../assets/icons/grid-2x2.svg);
        background-repeat: no-repeat;
        background-position: center;
    }

    &__alt {
        width: 70px;
    }

    &__fn {
        width: 70px;
    }

    &__arrow-top {
        width: 50px;
        background-image: url(../../assets/icons/arrow-top.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    &__arrow-left {
        width: 50px;
        background-image: url(../../assets/icons/arrow-left.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    &__arrow-bottom {
        width: 50px;
        background-image: url(../../assets/icons/arrow-bottom.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    &__arrow-right {
        width: 50px;
        background-image: url(../../assets/icons/arrow-right.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>

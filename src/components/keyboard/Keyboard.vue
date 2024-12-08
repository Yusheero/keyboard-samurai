<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Key from './Key.vue'
import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore()
</script>

<template>
  <div class="keyboard">
    <div id="keyboard" class="keyboard-region">
      <div class="keyboard-region__header">
        <Key :itemValue="'ESC'" :itemClass="'common__escape'" />
        <div class="keyboard-region__row">
          <Key :item-value="'F1'" />
          <Key :item-value="'F2'" />
          <Key :item-value="'F3'" />
          <Key :item-value="'F4'" />
        </div>
        
        <div class="keyboard-region__row">
          <Key :item-value="'F5'" />
          <Key :item-value="'F6'" />
          <Key :item-value="'F7'" />
          <Key :item-value="'F8'" />
        </div>

        <div class="keyboard-region__row">
          <Key :item-value="'F9'" />
          <Key :item-value="'F10'" />
          <Key :item-value="'F11'" />
          <Key :item-value="'F12'" />
        </div class="keys-container">

        <div class="keyboard-region__row">
          <Key :item-value="'DEL'" />
          <div class="keyboard-region__volume">
            <div class="volume-button"></div>
          </div>
        </div>
      </div>

      <div class="keyboard-region__row">
        <Key :item-value="'` ~'" :itemClass="'common__escape'" />
        <Key :item-value="'1'" />
        <Key :item-value="'2'" />
        <Key :item-value="'3'" />
        <Key :item-value="'4'" />
        <Key :item-value="'5'" />
        <Key :item-value="'6'" />
        <Key :item-value="'7'" />
        <Key :item-value="'8'" />
        <Key :item-value="'9'" />
        <Key :item-value="'0'" />
        <Key :item-value="'-'" />
        <Key :item-value="'='" />
        <Key :item-value="''" :itemClass="'common__backspace'" />
        <Key :item-value="'HOME'" />
      </div>

      <div class="keyboard-region__row">
        <Key :item-value="'TAB'" :itemClass="'common__tab'" />
        <Key :item-value="'Q'" />
        <Key :item-value="'W'" />
        <Key :item-value="'E'" />
        <Key :item-value="'R'" />
        <Key :item-value="'T'" />
        <Key :item-value="'Y'" />
        <Key :item-value="'U'" />
        <Key :item-value="'I'" />
        <Key :item-value="'O'" />
        <Key :item-value="'P'" />
        <Key :item-value="'['" />
        <Key :item-value="']'" />
        <Key :item-value="'\|/'" :itemClass="'common__slash'" />
        <Key :item-value="'PGUP'" />
      </div>

      <div class="keyboard-region__row">
        <Key :item-value="'CAPS'" :itemClass="'common__caps'" />
        <Key :item-value="'A'" />
        <Key :item-value="'S'" />
        <Key :item-value="'D'" />
        <Key :item-value="'F'" />
        <Key :item-value="'G'" />
        <Key :item-value="'H'" />
        <Key :item-value="'J'" />
        <Key :item-value="'K'" />
        <Key :item-value="'L'" />
        <Key :item-value="': ;'" />
        <Key :item-value="'KW'" />
        <Key :item-value="'ENTER'" :itemClass="'common__enter'" />
        <Key :item-value="'PGDN'" />
      </div>

      <div class="keyboard-region__row">
        <Key :item-value="'SHIFT'" :itemClass="'common__shift-left'" />
        <Key :item-value="'Z'" />
        <Key :item-value="'X'" />
        <Key :item-value="'C'" />
        <Key :item-value="'V'" />
        <Key :item-value="'B'" />
        <Key :item-value="'N'" />
        <Key :item-value="'M'" />
        <Key :item-value="','" />
        <Key :item-value="'.'" />
        <Key :item-value="'/'" />
        <Key :item-value="'SHIFT'" :itemClass="'common__tab'" />
        <Key :item-value="''" :itemClass="'common__arrow-top'" />
      </div>

      <div class="keyboard-region__row">
        <div class="keyboard-region__row row-margin">
          <Key :item-value="'CTRL'" :itemClass="'common__ctrl'" />
          <Key :item-value="''" :itemClass="'common__win'" />
          <Key :item-value="'ALT'" :itemClass="'common__alt'" />
          <Key :item-value="''" :itemClass="'common__space'" />
          <Key :item-value="'ALT'" :itemClass="'common__alt'" />
          <Key :item-value="'FN'" :itemClass="'common__fn'" />
        </div>
        
        <Key :item-value="''" :itemClass="'common__arrow-left'" />
        <Key :item-value="''" :itemClass="'common__arrow-bottom'" />
        <Key :item-value="''" :itemClass="'common__arrow-right'" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.keyboard {
  background-color: rgb(90, 90, 90);
  padding: 6px;
  border-radius: 14px
}

.keyboard-region {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  border-radius: 12px;
  background-color: var(--blacked);

  &__header {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__volume {
    width: 50px;
    height: 50px;
    float: left;
    background-color: #fff;
    color: var(--blacked);
    line-height: 48px;
    margin-left: 2px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 14px;

    .volume-button {
      background-color: #030303;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }

  &__row {
    display: flex;
    gap: 2px;
  }
}

.row-margin {
  margin-right: 20px;
}
</style>

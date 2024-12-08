<script setup>
import { onMounted, onUnmounted } from 'vue';
import Key from './Key.vue'
import { useKeyboardStore } from '@/store/store.js'

const store = useKeyboardStore()

onMounted(() => document.addEventListener("keydown", onKey))

onUnmounted(() => document.removeEventListener("keydown", onKey))

function onKey(event) { 
  console.log(event)
  for (const symbol of store.textInput) {
    console.log('dds');
  }
}
</script>

<template>
  <div class="keyboard">
    <div id="keyboard" class="keyboard-region">
    <div class="keyboard-region__header">
      <Key :itemValue="'ESC'" :itemClass="'common__escape'" />
      <div class="keyboard-region__row">
        <Key :itemValue="'F1'" />
        <Key :itemValue="'F2'" />
        <Key :itemValue="'F3'" />
        <Key :itemValue="'F4'" />
      </div>
      
      <div class="keyboard-region__row">
        <Key :itemValue="'F5'" />
        <Key :itemValue="'F6'" />
        <Key :itemValue="'F7'" />
        <Key :itemValue="'F8'" />
      </div>

      <div class="keyboard-region__row">
        <Key :itemValue="'F9'" />
        <Key :itemValue="'F10'" />
        <Key :itemValue="'F11'" />
        <Key :itemValue="'F12'" />
      </div class="keys-container">

      <div class="keyboard-region__row">
        <Key :itemValue="'DEL'" />
        <div class="keyboard-region__volume">
          <div class="volume-button"></div>
        </div>
      </div>
    </div>

    <div class="keyboard-region__row">
      <Key :itemValue="'` ~'" :itemClass="'common__escape'" />
      <Key :itemValue="'1'" />
      <Key :itemValue="'2'" />
      <Key :itemValue="'3'" />
      <Key :itemValue="'4'" />
      <Key :itemValue="'5'" />
      <Key :itemValue="'6'" />
      <Key :itemValue="'7'" />
      <Key :itemValue="'8'" />
      <Key :itemValue="'9'" />
      <Key :itemValue="'0'" />
      <Key :itemValue="'-'" />
      <Key :itemValue="'='" />
      <Key :itemValue="''" :itemClass="'common__backspace'" />
      <Key :itemValue="'HOME'" />
    </div>

    <div class="keyboard-region__row">
      <Key :itemValue="'TAB'" :itemClass="'common__tab'" />
      <Key :itemValue="'Q'" />
      <Key :itemValue="'W'" />
      <Key :itemValue="'E'" />
      <Key :itemValue="'R'" />
      <Key :itemValue="'T'" />
      <Key :itemValue="'Y'" />
      <Key :itemValue="'U'" />
      <Key :itemValue="'I'" />
      <Key :itemValue="'O'" />
      <Key :itemValue="'P'" />
      <Key :itemValue="'['" />
      <Key :itemValue="']'" />
      <Key :itemValue="'\|/'" :itemClass="'common__slash'" />
      <Key :itemValue="'PGUP'" />
    </div>

    <div class="keyboard-region__row">
      <Key :itemValue="'CAPS'" :itemClass="'common__caps'" />
      <Key :itemValue="'A'" />
      <Key :itemValue="'S'" />
      <Key :itemValue="'D'" />
      <Key :itemValue="'F'" />
      <Key :itemValue="'G'" />
      <Key :itemValue="'H'" />
      <Key :itemValue="'J'" />
      <Key :itemValue="'K'" />
      <Key :itemValue="'L'" />
      <Key :itemValue="': ;'" />
      <Key :itemValue="'KW'" />
      <Key :itemValue="'ENTER'" :itemClass="'common__enter'" />
      <Key :itemValue="'PGDN'" />
    </div>

    <div class="keyboard-region__row">
      <Key :itemValue="'SHIFT'" :itemClass="'common__shift-left'" />
      <Key :itemValue="'Z'" />
      <Key :itemValue="'X'" />
      <Key :itemValue="'C'" />
      <Key :itemValue="'V'" />
      <Key :itemValue="'B'" />
      <Key :itemValue="'N'" />
      <Key :itemValue="'M'" />
      <Key :itemValue="','" />
      <Key :itemValue="'.'" />
      <Key :itemValue="'/'" />
      <Key :itemValue="'SHIFT'" :itemClass="'common__tab'" />
      <Key :itemValue="''" :itemClass="'common__arrow-top'" />
    </div>

    <div class="keyboard-region__row">
      <div class="keyboard-region__row row-margin">
        <Key :itemValue="'CTRL'" :itemClass="'common__ctrl'" />
        <Key :itemValue="''" :itemClass="'common__win'" />
        <Key :itemValue="'ALT'" :itemClass="'common__alt'" />
        <Key :itemValue="''" :itemClass="'common__space'" />
        <Key :itemValue="'ALT'" :itemClass="'common__alt'" />
        <Key :itemValue="'FN'" :itemClass="'common__fn'" />
      </div>
      
      <Key :itemValue="''" :itemClass="'common__arrow-left'" />
      <Key :itemValue="''" :itemClass="'common__arrow-bottom'" />
      <Key :itemValue="''" :itemClass="'common__arrow-right'" />
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

<script setup>
import Key from './Key.vue';

const keys = [
  [
    {
      key: 'ESC',
      class: 'commonKey',
    },
  ],
  [
    {

    },
  ],
  [
    {

    },
  ],
  [
    {

    },
  ],
  [
    {

    },
  ],
]
</script>

<template>
  <div class="keyboard">
    <Key :key="keys"/>
  </div>
</template>

<style scoped>
.keyboard {
  
}

.key-default {
    grid-area: default;
    width: 50px;
    height: 50px;
    background-color: aqua;
}

.key-tab {
    grid-area: default;
    width: 70px;
    height: 50px;
}

.key-caps {
    grid-area: default;
    width: 80px;
    height: 50px;
}

.key-enter {
    grid-area: default;
    width: 100px;
    height: 50px;
}

.key-space {
    grid-area: default;
    width: 150px;
    height: 50px;
}

.key__escape {
    background-color: rgb(197, 29, 29);
}

.key__controls {
    background-color: rgb(28, 95, 37);
}

.key__backspace {
    width: 100px;
}

.key__tab {
    width: 75px;
}

.key__slash {
    width: 75px;
}

.key__caps {
    width: 90px;
}

.key__enter {
    width: 112px;
}

.key__shift {
    width: 100px;
}

.key__space {
    width: 300px;
}

.key__empty {
    width: 70px;
}
</style>

<script setup lang="ts">
    import Keyboard from '../Keyboard.vue';
</script>

<template>
    <div class="table">
        <Keyboard class="keyboard"/>
    </div>
</template>

<style>
.table {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

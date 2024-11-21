<script setup>
import Key from './Key.vue'
</script>

<template>
    <div class="keyboard">
        <div class="row">
            <Key :type="'escape'"/>
            <Key :text="'1'" />
            <Key :text="'2'" />
            <Key :text="'3'" />
            <Key :text="'4'" />
            <Key :text="'5'" />
            <Key :text="'6'" />
            <Key :text="'7'" />
            <Key :text="'8'" />
            <Key :text="'9'" />
            <Key :text="'0'" />
            <Key :text="'-'" />
            <Key :text="'+'" />
            <Key :type="'backspace'"/>
        </div>

        <div class="row">
            <Key :type="'tab'"/>
            <Key :text="'Q'" />
            <Key :text="'W'" />
            <Key :text="'E'" />
            <Key :text="'R'" />
            <Key :text="'T'" />
            <Key :text="'Y'" />
            <Key :text="'U'" />
            <Key :text="'I'" />
            <Key :text="'O'" />
            <Key :text="'P'" />
            <Key :text="'['" />
            <Key :text="']'" />
            <Key :type="'slash'"/>
        </div>

        <div class="row">
            <Key :type="'caps'" />
            <Key :text="'A'" />
            <Key :text="'S'" />
            <Key :text="'D'" />
            <Key :text="'F'" />
            <Key :text="'G'" />
            <Key :text="'H'" />
            <Key :text="'J'" />
            <Key :text="'K'" />
            <Key :text="'L'" />
            <Key :text="':'" />
            <Key :text="'\''" />
            <Key :type="'enter'" />
        </div>

        <div class="row">
            <Key :type="'shift'" />
            <Key :text="'Z'" />
            <Key :text="'X'" />
            <Key :text="'C'" />
            <Key :text="'V'" />
            <Key :text="'B'" />
            <Key :text="'N'" />
            <Key :text="'M'" />
            <Key :text="'<'" />
            <Key :text="'>'" />
            <Key :text="'?'" />
            <Key />
            <Key :type="'controls'"/>
            <Key />
        </div>

        <div class="row">
            <Key :type="'empty'"/>
            <Key :type="'empty'"/>
            <Key :type="'empty'"/>
            <Key :type="'space'"/>
            <Key />
            <Key />
            <Key :type="'controls'"/>
            <Key :type="'controls'"/>
            <Key :type="'controls'"/>
        </div>
    </div>
</template>

<style scoped>
.keyboard {
    width: 780px;
    height: 262px;
    margin: 0 auto;
    border: 3px solid #000000;
    border-radius: 8px;
    background: #000000;
}

.row {
    margin-top: 2px;
    overflow: hidden;
}
</style>

<script setup lang="ts">
import Button from './Key.vue'
</script>

<template>
    <div class="keyboard">
        <div class="row">
            <Button :type="'escape'"/>
            <Button :text="'1'" />
            <Button :text="'2'" />
            <Button :text="'3'" />
            <Button :text="'4'" />
            <Button :text="'5'" />
            <Button :text="'6'" />
            <Button :text="'7'" />
            <Button :text="'8'" />
            <Button :text="'9'" />
            <Button :text="'0'" />
            <Button :text="'-'" />
            <Button :text="'+'" />
            <Button :type="'backspace'"/>
        </div>

        <div class="row">
            <Button :type="'tab'"/>
            <Button :text="'Q'" />
            <Button :text="'W'" />
            <Button :text="'E'" />
            <Button :text="'R'" />
            <Button :text="'T'" />
            <Button :text="'Y'" />
            <Button :text="'U'" />
            <Button :text="'I'" />
            <Button :text="'O'" />
            <Button :text="'P'" />
            <Button :text="'['" />
            <Button :text="']'" />
            <Button :type="'slash'"/>
        </div>

        <div class="row">
            <Button :type="'caps'" />
            <Button :text="'A'" />
            <Button :text="'S'" />
            <Button :text="'D'" />
            <Button :text="'F'" />
            <Button :text="'G'" />
            <Button :text="'H'" />
            <Button :text="'J'" />
            <Button :text="'K'" />
            <Button :text="'L'" />
            <Button :text="':'" />
            <Button :text="'\''" />
            <Button :type="'enter'" />
        </div>

        <div class="row">
            <Button :type="'shift'" />
            <Button :text="'Z'" />
            <Button :text="'X'" />
            <Button :text="'C'" />
            <Button :text="'V'" />
            <Button :text="'B'" />
            <Button :text="'N'" />
            <Button :text="'M'" />
            <Button :text="'<'" />
            <Button :text="'>'" />
            <Button :text="'?'" />
            <Button />
            <Button :type="'controls'"/>
            <Button />
        </div>

        <div class="row">
            <Button :type="'empty'"/>
            <Button :type="'empty'"/>
            <Button :type="'empty'"/>
            <Button :type="'space'"/>
            <Button />
            <Button />
            <Button :type="'controls'"/>
            <Button :type="'controls'"/>
            <Button :type="'controls'"/>
        </div>
    </div>
</template>

<style scoped>
.keyboard {
    width: 780px;
    height: 262px;
    margin: 0px auto;
    border: 3px solid #000000;
    border-radius: 8px;
    background: #000000;
}

.row {
    margin-top: 2px;
    overflow: hidden;
}
</style>
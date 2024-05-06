<script setup lang="ts">
import Button from './Key.vue'
</script>

<template>
    <div class="keyboard">
        <div class="row">
            <Button class="key" />
            <Button class="key" :text="'1'" />
            <Button class="key" :text="'2'" />
            <Button class="key" :text="'3'" />
            <Button class="key" :text="'4'" />
            <Button class="key" :text="'5'" />
            <Button class="key" :text="'6'" />
            <Button class="key" :text="'7'" />
            <Button class="key" :text="'8'" />
            <Button class="key" :text="'9'" />
            <Button class="key" :text="'0'" />
            <Button class="key" :text="'-'" />
            <Button class="key" :text="'+'" />
            <Button class="key key__w100" />
        </div>

        <div class="row">
            <Button class="key key__w75" />
            <Button class="key" :text="'Q'" />
            <Button class="key" :text="'W'" />
            <Button class="key" :text="'E'" />
            <Button class="key" :text="'R'" />
            <Button class="key" :text="'T'" />
            <Button class="key" :text="'Y'" />
            <Button class="key" :text="'U'" />
            <Button class="key" :text="'I'" />
            <Button class="key" :text="'O'" />
            <Button class="key" :text="'P'" />
            <Button class="key" :text="'['" />
            <Button class="key" :text="']'" />
            <Button class="key key__w75" />
        </div>

        <div class="row">
            <Button class="key key__w90" />
            <Button class="key" :text="'A'" />
            <Button class="key" :text="'S'" />
            <Button class="key" :text="'D'" />
            <Button class="key" :text="'F'" />
            <Button class="key" :text="'G'" />
            <Button class="key" :text="'H'" />
            <Button class="key" :text="'J'" />
            <Button class="key" :text="'K'" />
            <Button class="key" :text="'L'" />
            <Button class="key" :text="':'" />
            <Button class="key" :text="'\''" />
            <Button class="key key__w112" />
        </div>

        <div class="row">
            <Button class="key key__w100" />
            <Button class="key" :text="'Z'" />
            <Button class="key" :text="'X'" />
            <Button class="key" :text="'C'" />
            <Button class="key" :text="'V'" />
            <Button class="key" :text="'B'" />
            <Button class="key" :text="'N'" />
            <Button class="key" :text="'M'" />
            <Button class="key" :text="'<'" />
            <Button class="key" :text="'>'" />
            <Button class="key" :text="'?'" />
            <Button class="key" />
            <Button class="key" />
            <Button class="key" />
        </div>

        <div class="row">
            <Button class="key key__w70"/>
            <Button class="key key__w70"/>
            <Button class="key key__w70"/>
            <Button class="key key__w300"/>
            <Button class="key"/>
            <Button class="key"/>
            <Button class="key"/>
            <Button class="key"/>
            <Button class="key"/>
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

.key {
    width: 50px;
    height: 50px;
    float: left;
    cursor: pointer;
    background-color: var(--off-white);
    color: #000000;
    line-height: 48px;
    text-align: center;
    margin-left: 2px;
    border-radius: 4px;
}

.key__w100 {
    width: 100px;
}

.key__w75 {
  width: 75px;
}

.key__w90 {
  width: 90px;
}

.key__w112 {
  width: 112px;
}

.key__w70 {
  width: 70px;
}

.key__w300 {
  width: 300px;
}
</style>
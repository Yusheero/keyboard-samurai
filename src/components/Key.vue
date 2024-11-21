<script>
    export default {
        props: {
            text: String,
            type: String,
        }
    }
</script>

<template>
    <div :class="'key key__' + type" > {{ text }} </div>
</template>

<style>
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

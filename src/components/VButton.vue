<script setup lang="ts">
const { info } = defineProps(['info'])
const { propValue, style } = info
</script>
<template>
    <div class="btn">
        {{ propValue }}
    </div>
</template>

<style scoped>
.btn {
    background-color: aqua;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 50px;
}

.btn:active {
    background-color: red;
}
</style>

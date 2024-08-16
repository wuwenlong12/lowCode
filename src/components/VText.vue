<script setup lang="ts">
const { info } = defineProps(['info'])
const { propValue, style } = info
</script>

<template>
        <div>
            {{ propValue }}
        </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import {defineEmits} from 'vue'
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEditorStore } from '@/stores/editor';

const editorStore = useEditorStore();
// Then register the languages you need
const info = editorStore.info

const emit = defineEmits(['cloneDerive']

);
const closeDerive = () =>{
    emit('cloneDerive')
}
</script>

<template>
    <div class="root">
        
        <el-icon size="25" color="#78a355" @click="closeDerive" class="close"><CircleCloseFilled /></el-icon>
        <json-viewer
        class="json"
        :value="info"
        :expand-depth="1"
        copyable
        sort
        >
        </json-viewer>

    </div>
</template>

<style lang="scss" scoped>
.root {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 70vw;
    height: 70vh;
    background-color: #fff;
    z-index: 9999;
    border-radius: 10px;
    box-shadow:
    0 6px 6px hsl(0deg 0% 0% / 0.3);
    padding: 20px;
    overflow: hidden;
    // position: relative;
    .close{
        padding: 10px;
        position: absolute;
        right: 0;
        top: 0;
    }
    .json{
        margin-top: 30px;
        height: 100%;
        overflow: auto
    }
}
</style>

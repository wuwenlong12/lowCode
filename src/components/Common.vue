<script setup lang="ts">

import { useEditorStore } from '@/stores/editor';
import { computed, nextTick, onMounted, ref } from 'vue';
// import VueDragResize from 'vue-drag-resize';
const { info } = defineProps(['info'])
// const {top,left} = style
const { propValue, style,id } = info
let { top, left,width,height } = style
const editorStore = useEditorStore();
const updateStyle = editorStore.updateStyle

// const width = ref(width)
// const height = ref(height)
const dragWidth = ref(0)
const dragHeight = ref(0)
const isDraggable = ref(true)
const dom = ref<HTMLElement>();

const stylebox = computed(()=>{
    if (dragWidth.value) {
        console.log(dragWidth.value+'px');
        
        return {
            width:dragWidth.value+'px',
            height:dragHeight.value+'px'
        }
    }else{
        return {
            width:width+'px',
            height:height+'px'
        }
    }
})
  


// // 保证DOM更新后才获取尺寸
// nextTick(() => {
//     if (dom.value) {
//             width.value = dom.value.clientWidth/2
//             height.value = dom.value.clientHeight/2
//         console.log(dom.value.clientWidth, dom.value.clientHeight);
//     }
//     // dom.value.clientWidth = 1000
// })


const onActivated = (e) => {
    console.log(e);
}
const onResizing = (e) => {
    console.log(e);
    dragWidth.value = e.width
    dragHeight.value = e.height
    const {width,height} = e
    updateStyle(id,{width,height})
}
const onResizstop = (e) => {
    console.log(e);
}
const onDragging = (e) => {

}
const onDragstop = (e) => {
    const {left,top} = e
    updateStyle(id,{left,top})
}
</script>

<template>
    <VueDragResize :parentLimitation="true" :isDraggable="isDraggable" :isActive="false" :parentW="1200" :parentH="740"
        :parentScaleX="0.75" :parentScaleY="0.75" :w="width" :h="height" :x="left" :y="top" :z="999" :snapToGrid="true"
        :gridX="20" :gridY="20" :minh="height" :minw="width" :aspectRatio="false" @activated="onActivated"
        @resizing="onResizing" @resizestop="onResizstop" @dragging="onDragging" @dragstop="onDragstop">
        <div ref="dom" class="root" :style="stylebox">
            <component :is="info.component" :info="info" />
        </div>
    </VueDragResize>

</template>

<style scoped>
.root {
    position: absolute;
}
</style>

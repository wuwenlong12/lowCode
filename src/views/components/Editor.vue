<template>
    <div class="root">
        <div :style="elementStyle" class="bg" ref="bgRef">
            <div :ref="Drop" class="editor" >
                <template v-for="(item, index) in editorStore.info" :key="item.icon">
                   <Common :info="item"></Common>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, defineComponent } from 'vue'
import { useEditorStore } from '@/stores/editor';
import { useDrop } from 'vue3-dnd'
import _ from 'lodash'
import Common from '@/components/Common.vue';
import {RanderID} from '../../utils/index'

const bgRef = ref(null)
const editorStore = useEditorStore();

const elementStyle = computed(() => ({
    width: `${editorStore.width}px`,
    height: `${editorStore.height}px`,
    scale:`${editorStore.ratio*0.01}`
}))
const [collect, Drop] = useDrop({
    accept: "acceptType",
    hover(item, monitor) { //实时监听正在容器内移动的数据源,每个0.1秒左右就触发一次
        // console.log('拖拽源的数据', item.component)
        // console.log('拖拽源的位置', monitor.getClientOffset())
    },
    collect(monitor) {
        return {
            isOver: monitor.isOver(), // 判断拖拽源是否在容器内
            item: monitor.getItem(), //拖拽源传递的数据
        }
    },
    drop(item, monitor) {
        console.log('拖拽源的数据', item.component)
        console.log('拖拽源的位置', monitor.getClientOffset())
        const relative = monitor.getClientOffset()
        const position = bgRef.value.getBoundingClientRect()
        //计算相对于窗口的位置
        const x = relative.x - position.x
        const y = relative.y - position.y
        const result = _.cloneDeep(item)
        console.log(x);
        console.log(y);
        result.style.top = y/(editorStore.ratio*0.01)
        result.style.left = x/(editorStore.ratio*0.01)
        //生成随记id
        result.id = RanderID(item.component)
        //添加到pinia
       
        editorStore.addInfo(result)
    }

})


watch(
    () => collect.value,
    (value) => {
        if (value.isOver) {
            console.log("拖拽源移动到容器范围内了")
            console.log("这是拖拽源的数据", value.item)
        } else {
            console.log("拖拽源移动到容器范围外面了")
        }
    },
    { deep: true },
)


</script>
<style lang="scss" scoped>
.root {
    max-width: 1200px;
    max-height: 100vh;
    padding: 30px;
    overflow: auto;

    .bg {
        background-color: #fff;

        .editor {
            width: 100%;
            height: 100%;
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTQwIDBIMHY0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+) repeat !important;
            position: relative;
        }
    }

}
</style>

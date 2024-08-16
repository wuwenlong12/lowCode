<template>
    <Derive></Derive>
    <div class="content">

        <el-button @click="derive" class="btn">导出</el-button>
        <el-button class="btn">撤销</el-button>
        <el-button class="btn">重做</el-button>
        <el-button class="btn">插入图片</el-button>
        <el-button class="btn">预览</el-button>
        <el-button class="btn">截图</el-button>
        <div class="input-div">
            <div class="title">画布大小</div>
            <el-input :onchange="editorChange()" v-model="width" class="inputOne" placeholder="" />
            <el-input :onchange="editorChange()" class="input" v-model="height" placeholder="">
                <template #append>px</template>
            </el-input>
        </div>
        <div class="input-div">
            <div class="title">画布比例</div>
            <el-input class="input" v-model="ratio" placeholder="Please input">
                <template #append>%</template>
            </el-input>
        </div>

    </div>



</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useEditorStore } from '@/stores/editor';
import Derive from './upper/Derive.vue';
const editorStore = useEditorStore();
const width = ref(1200)
const height = ref(740)
const ratio = ref(75)


const editorChange = () => {
    editorStore.setHeight(Number(height.value))
    editorStore.setWidth(width.value)
    editorStore.setRatio(ratio.value)
}


const isDerive = ref(false)

const derive = () => {
    isDerive.value = true
}
</script>
<style scoped lang="scss">
.content {

    background-color: $bg-color;
    padding: $spacing-col-sm $spacing-row-sm ;
    display: flex;
    align-items: center;

    .btn {
        padding: $spacing-col-sm $spacing-row-sm ;
    }

    .input-div {
        font-weight: lighter;
        display: flex;
        align-items: center;
        margin-left: 20px;

        .title {
            text-align: center;
            width: 70px;
        }

        .inputOne {
            width: 60px;
        }

        .input {
            width: 110px;
        }
    }
}
</style>

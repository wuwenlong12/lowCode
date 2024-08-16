<script setup lang="ts">
import { ref } from 'vue';
import list from '../../utils/component-list';
import Drag from '@/components/Drag.vue';

const componentList = ref(list)
</script>

<template>
    <div class="component-list">
        <template v-for="(item, index) in componentList" :key="index">
            <Drag :json="item">
                <div class="list" draggable :data-index="index">
                    <el-icon :size="20">
                        <component :is="item.icon" />
                    </el-icon>
                </div>
            </Drag>
        </template>

    </div>
</template>

<style lang="scss" scoped>
.component-list {
    opacity: 1;
    height: 65%;
    padding: 8px;
    display: grid;
    position: relative;
    grid-gap: 10px 19px;
    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 40px);
    transition: opacity .5s .5s;

    .list {
        width: 80px;
        height: 40px;
        border: 1px solid #ddd;
        cursor: grab;
        text-align: center;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-biaoge {
            font-size: 18px;
        }

        .icon-tupian {
            font-size: 16px;
        }
    }
}
</style>

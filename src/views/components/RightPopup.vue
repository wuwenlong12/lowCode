<template>

    <div class="root" :style="{ width: sideWidth+'px' }">
      <div class="control" @click="openSide">
        <el-icon>
         <ArrowLeftBold v-if="visible" />
        <ArrowRightBold v-else />
        </el-icon>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  const visible = ref(true)
  const sideWidth = ref(200)
  const openSide = () => {
    visible.value = !visible.value
  }
  watch(visible, () => {
    if (visible.value) {
      sideWidth.value = 200
    }else{
      sideWidth.value = 20
    }
  })
  </script>
  <style lang="scss" scoped>
  .root {
    background-color: red;
    // width: 200px;
    height: 90vh;
    position: relative;
    background-color: #fff;
    transition: all .5s;
    .control {
      position: absolute;
      top: 50%;
      left: -15px;
      background-color: #fff;
      border-radius: 20px;
      padding: 5px 3px 5px 3px;
    }
  }
  </style>
  
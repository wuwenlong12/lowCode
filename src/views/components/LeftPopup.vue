<template>

  <div class="root" :style="{ width: sideWidth + 'px' }">
    <div class="control" @click="openSide">
      <el-icon>
        <ArrowRightBold v-if="visible" />
        <ArrowLeftBold v-else />
      </el-icon>
    </div>
    <ComponentList class="list" :style="{opacity:opac}"></ComponentList>
  </div>

</template>

<script lang="ts" setup>
import Test from '@/components/Drag.vue';
import { ref, watch } from 'vue'
import ComponentList from './ComponentList.vue';
const visible = ref(true)
const sideWidth = ref(210)
const opac = ref(1)
const openSide = () => {
  visible.value = !visible.value
}
watch(visible, () => {
  if (!visible.value) {
    sideWidth.value = 200
    setTimeout(()=>{
      opac.value =1
    },500)
  } else {
    sideWidth.value = 20
    setTimeout(()=>{
      opac.value =0
    },1)
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
    right: -15px;
    background-color: #fff;
    border-radius: 20px;
    padding: 5px 3px 5px 3px;
  }
  .list{
    transition: all .2s;
  }
}
</style>

<script setup lang="ts">
import Editor from './components/Editor.vue';
import Header from './components/Header.vue';
import LeftPopup from './components/LeftPopup.vue';
import RightPopup from './components/RightPopup.vue';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'

</script>

<template>
   <DndProvider :backend="HTML5Backend">
      <div class="page">
         <Header></Header>
         <div class="main">
            <LeftPopup></LeftPopup>
            <Editor></Editor>
            <RightPopup></RightPopup>
         </div>

      </div>
   </DndProvider>


</template>
<style lang="scss" scoped>
.page {
   background-color: $bg-color-grey;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   border-bottom: 1px solid #888;
   .main {
     margin-top: 1px;
      display: flex;
      justify-content: space-between;
   }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useEditorStore } from '@/stores/editor'
const editorStore = useEditorStore()
const props= defineProps(['info'])
const { propValue, style, id } = props.info
const isEditor = ref(false)
const input = ref('')
const blur = () => {
  isEditor.value = false
  editorStore.updateBasic(id, { propValue: input.value })
}
const clickHandle = (e) =>{
    e.target.focus()
}
</script>

<template>

  <textarea @click="clickHandle" class="root"
    v-if="isEditor"
    v-model="input"
    type="textarea"
    placeholder="Please input"
    @blur="blur"></textarea>
  <el-text class="root" v-else @dblclick="isEditor = true" size="large">{{ props.info.propValue }}</el-text>
</template>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
  text-align: start;
  white-space: pre-wrap;       /* 保留空白符并且文本会在适当的地方自动换行 */
  overflow-wrap: break-word;   /* 在长单词或URL地址内部进行换行 */
}
</style>

<template>
    <div :ref="drag">
        <slot></slot>
    </div>
  </template>
  <script lang="ts" setup>
  import { watch } from "vue";
import { useDrag } from "vue3-dnd"
const props = defineProps(['json'])


  // 2.collect是vue的ref方法的返回值，使用时请用collect.value,collect更新会触发update生命周期，会更新依赖
  const [collect, drag] = useDrag({
    type: "acceptType",
    item: () => {
      return props.json
    },
    collect(monitor) {
      return {
        //1.将监控器抛出的状态赋值到isDragging
        isDragging: monitor.isDragging(),
      }
    },
  })
  // 3.监听collect的变化，做相应的逻辑处理
  watch(
    () => collect.value.isDragging,
    (value) => {
      if (value) {
        console.log("正在被拖拽中"+props.json)
      } else {
        console.log("没有在拖拽了"+collect.value)
      }
    },
  )
  
  </script>
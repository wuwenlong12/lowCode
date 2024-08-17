import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    width: 1200,
    height: 750,
    ratio: 100,
    info:[],
    currID:''
  }),
  getters: {
    // double: (state) => state.count * 2,
  },
  actions: {
    setWidth(e: number) {
      this.width = e
    },
    setHeight(e: number) {
      this.height = e
    },
    setRatio(e: number) {
      this.ratio = e
    },
    addInfo(e){
      this.info.push(e)
    },
    cleanInfo(){
      this.info = []
    },
    updateStyle(id, styleUpdates) {
      this.info = this.info.map(item => {
        if (item.id === id) {
          // 使用Object.assign()来合并样式更新
          item.style = Object.assign({}, item.style, styleUpdates);
        }
        return item;
      });
    },
    updateBasic(id,updates){
      this.info = this.info.map(item => {
        if (item.id === id) {
          // 使用Object.assign()来合并样式更新
          item = Object.assign({}, item, updates);
        }
        return item;
      });
    }
  },
})

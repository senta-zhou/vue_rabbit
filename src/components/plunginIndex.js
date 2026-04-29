// 通过插件化方式，把components里所用组件进行全局化注册

import ImagineView from "@/components/ImagineView/ImagineIndex.vue";
import Sku from "@/components/XtxSku/index.vue";

export const componentPlugin = {
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component("XtxImagineView", ImagineView);
    app.component("XtxSku", Sku);
  },
};

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 引入初始化样式文件
import "@/styles/common.scss";

import { useIntersectionObserver } from "@vueuse/core";
// // 测试接口函数
// import { getCategory } from "@/apis/testAPI";
// getCategory();
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    // el指令绑定的那个元素
    // binding.value 指令等于号后面的值， imgUrl
    console.log(el, binding.value);
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      if (isIntersecting) {
        el.src = binding.value;
      }
    });
  },
});

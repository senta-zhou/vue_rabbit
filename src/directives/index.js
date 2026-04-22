// 定义懒加载指令插件
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    // 定义全局指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el指令绑定的那个元素
        // binding.value 指令等于号后面的值， imgUrl
        console.log(el, binding.value);
        // 解构赋值获取stop方法，在加载一次图片后停止监听
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting);
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};

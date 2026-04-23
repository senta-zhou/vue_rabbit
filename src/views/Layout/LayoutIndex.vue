<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

// 触发获取导航的action
// 第一步导入写好的仓库
import { useCategoryStore } from "@/stores/category";
// 导入vue页面挂载完成的钩子，onMounted
import { onMounted } from "vue";
// 实例化仓库，相当于拿到仓库的使用权
const categoryStore = useCategoryStore();
// 页面挂载后，调用仓库里的getXXX方法，接入数据
onMounted(() => {
  categoryStore.getCategory();
});
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key，破坏服用机制，强制摧毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->

  <!-- 路由守卫 -->
  <RouterView />

  <LayoutFooter />
</template>

import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/views/Layout/LayoutIndex.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/HomeIndex.vue";
import Category from "@/views/Category/CategoryIndex.vue";
import SubCategory from "@/views/SubCategory/SubCategoryIndex.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        // 默认第一个字组件显示home
        { path: "", component: Home },
        {
          path: "category/:id",
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;

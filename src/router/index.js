import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/views/Layout/LayoutIndex.vue";
import Login from "@/views/Login/LoginIndex.vue";
import Home from "@/views/Home/HomeIndex.vue";
import Category from "@/views/Category/CategoryIndex.vue";
import SubCategory from "@/views/SubCategory/SubCategoryIndex.vue";
import Detail from "@/views/Detail/DetailIndex.vue";
import CartList from "@/views/CartList/CartIndex.vue";
import Checkout from "@/views/Checkout/CheckoutIndex.vue";

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
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: CartList,
        },
        {
          path: "checkout",
          component: Checkout,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  // 路由滚动行为定制,路由切换时候自动滚动到顶部
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;

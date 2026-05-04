// 管理用户数据相关
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 定义管理用户的state
    const userInfo = ref({});
    // 定义获取接口数据action的函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;

      // 合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        }),
      );
      cartStore.updateCartList();
    };

    // 退出登录后清除数据
    const clearUserInfo = () => {
      userInfo.value = {};
      // 清除购物车信息
      cartStore.clearCart();
    };
    // 以对象的格式把state和action return
    return { userInfo, getUserInfo, clearUserInfo };
  },
  {
    persist: true,
  },
);

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1.定义state -- cartList
    const cartList = ref([]);
    // 2.定义action -- addCart
    const addCart = (goods) => {
      // 添加购物车操作
      // 已有商品则count++
      // 没有则添加商品
      // 思路：通过传递过来的商品规格id匹配一下购物车里已有的，能找到即添加过
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        item.count++;
      } else {
        cartList.value.push(goods);
      }
    };
    return {
      cartList,
      addCart,
    };
  },
  {
    persist: true,
  },
);

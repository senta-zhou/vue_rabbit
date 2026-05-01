import { defineStore } from "pinia";
import { computed, ref } from "vue";

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
    const delCart = (skuId) => {
      const index = cartList.value.findIndex((item) => skuId === item.skuId);
      cartList.value.splice(index, 1);
    };

    // 计算属性
    // 总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));
    // 总的价格
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));
    return {
      cartList,
      allCount,
      allPrice,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  },
);

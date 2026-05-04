import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart";
export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);

    // 1.定义state -- cartList
    const cartList = ref([]);
    // 抽象获取最新购物车的action
    const updateCartList = async () => {
      // 获取最新的购物车列表
      const res = await findNewCartListAPI();
      // 替换本地的购物车列表
      cartList.value = res.result;
    };

    // 2.定义action -- addCart
    const addCart = async (goods) => {
      const { skuId, count } = goods;
      // 判断是否登录了
      if (isLogin.value) {
        // 登录后的购物逻辑
        // 加入购物车列表
        await insertCartAPI({ skuId, count });
        updateCartList();
      } else {
        // 未登录的本地购物逻辑
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
      }
    };

    // 删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        // 调用接口实现删除功能
        await delCartAPI([skuId]);
        updateCartList();
      } else {
        const index = cartList.value.findIndex((item) => skuId === item.skuId);
        cartList.value.splice(index, 1);
      }
    };

    // 清除购物车
    const clearCart = () => {
      cartList.value = [];
    };

    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过skuId找到要修改seleted的那一项，然后将它的selected改为传过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    // 全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    // 计算属性
    // 总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));
    // 总的价格
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));

    // 已选商品数量
    const selectedCount = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0),
    );
    // 已选商品总价
    const selectedPrice = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0),
    );

    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      clearCart,
    };
  },
  {
    persist: true,
  },
);

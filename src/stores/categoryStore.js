import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表的数据管理
  // state 导航列表的数据
  const categoryList = ref([]);
  // action 导航列表的方法
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };

  return { categoryList, getCategory };
});

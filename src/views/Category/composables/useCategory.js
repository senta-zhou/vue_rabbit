// 封装分类的相关业务代码
import { ref, onMounted } from "vue";
import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  // id=route.params.id是给了个默认值
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());
  // 在路由变化后再重新请求新的数据
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}

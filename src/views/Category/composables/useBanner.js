// 封装轮播图相关业务的代码
import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";

export function useBanner() {
  // 从接口拿到的数据，变为响应式数组
  const bannerList = ref([]);
  // 发送网络请求，异步操作
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: "2" });
    // 将请求到的数据存入list数组里
    bannerList.value = res.result;
  };
  // 在挂载的时候再调用请求，避免时机不对出错
  onMounted(() => {
    getBanner();
  });
  return {
    bannerList,
  };
}

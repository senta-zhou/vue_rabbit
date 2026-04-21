import appInstance from "@/utils/http";

// 获取banner
export function getBannerAPI() {
  return appInstance({
    url: "/home/banner",
  });
}

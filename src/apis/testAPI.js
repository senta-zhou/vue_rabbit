import appInstance from "@/utils/http";
export function getCategory() {
  // 实例参数发送请求
  return appInstance({
    url: "home/category/head",
  });
}

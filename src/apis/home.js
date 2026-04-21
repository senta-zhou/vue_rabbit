import appInstance from "@/utils/http";

// 获取banner
export function getBannerAPI() {
  return appInstance({
    url: "/home/banner",
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return appInstance({
    url: "/home/new",
  });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return appInstance({ url: "home/hot", method: "get" });
};

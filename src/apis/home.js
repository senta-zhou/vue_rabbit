import appInstance from "@/utils/http";

// 获取banner
export function getBannerAPI(params = {}) {
  // 默认为1商品为2
  // 结构赋值，给默认值为1
  const { distributionSite = "1" } = params;
  return appInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
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

export const getGoodsAPI = () => {
  return appInstance({
    url: "home/goods",
  });
};

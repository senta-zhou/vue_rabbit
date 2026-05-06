import request from "@/utils/http";

// 封装获取订单详细接口
export const getOrderAPI = (id) => {
  return request({
    url: `member/order/${id}`,
  });
};

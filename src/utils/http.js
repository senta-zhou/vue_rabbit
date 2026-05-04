// axios基础封装
import axios from "axios";

import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/userStore";
import router from "@/router";
const appInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
appInstance.interceptors.request.use(
  (config) => {
    // 1.从pinia中获取token数据
    const userStore = useUserStore();
    // 2.按照后端要求拼接token数据
    const token = userStore.userInfo?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e),
);

// axios响应式拦截器
appInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    // 统一错误提示
    ElMessage({ type: "warning", message: e.response?.data.message });

    // token 401失效处理
    // 1.清除本地用户数据
    // 2.跳转到登录页面
    if (e.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  },
);

export default appInstance;

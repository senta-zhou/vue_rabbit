// axios基础封装
import axios from "axios";

import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

const appInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
appInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e),
);

// axios响应式拦截器
appInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    // 统一错误提示
    ElMessage({ type: "warning", message: e.response.data.message });
    return Promise.reject(e);
  },
);

export default appInstance;

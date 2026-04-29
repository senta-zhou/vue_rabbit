import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { lazyPlugin } from "./directives";
// 引入初始化样式文件
import "@/styles/common.scss";

// 引入全局组件插件
import { componentPlugin } from "./components/plunginIndex";

// // 测试接口函数
// import { getCategory } from "@/apis/testAPI";
// getCategory();
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
// 使用全局组件插件
app.use(componentPlugin);

app.mount("#app");

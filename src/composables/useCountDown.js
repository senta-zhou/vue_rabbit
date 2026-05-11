// 封装倒计时函数
import { computed, ref, onUnmounted } from "vue";
// 格式化
import dayjs from "dayjs";

export const useCountDown = () => {
  let timer = null;
  // 响应式数据
  const time = ref(0);
  // 格式化时间
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  // 开启倒计时函数
  const start = (curTime) => {
    // 开始倒计时逻辑
    time.value = curTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };

  // 组件销毁时清除定时器
  onUnmounted(() => {
    // 定时器存在则清除
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  });

  return {
    formatTime,
    start,
  };
};

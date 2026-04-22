<script setup>
// 引入已经创建好的获取接口
import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";
// 从接口拿到的数据，变为响应式数组
const bannerList = ref([]);
// 发送网络请求，异步操作
const getBanner = async () => {
  const res = await getBannerAPI();
  // 将请求到的数据存入list数组里
  bannerList.value = res.result;
};
// 在挂载的时候再调用请求，避免时机不对出错
onMounted(() => {
  getBanner();
});
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>

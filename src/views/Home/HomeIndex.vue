<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import homeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试用例 -->
  <HomePanel title="新鲜好物" sub-title="新鲜好物，快来购买"> <div>新鲜好物</div> </HomePanel>
  <HomePanel title="人气商品" sub-title="人气好物，快来购买"> </HomePanel>
</template>

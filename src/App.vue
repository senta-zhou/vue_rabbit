<script setup></script>
<!-- 一级路由出口 -->
<template>
  <router-view></router-view>
  <div class="test">test scss</div>
</template>

<style scoped lang="scss">
.test {
  color: $sucColor;
}
</style>

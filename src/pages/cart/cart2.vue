<script setup lang="ts">
import CartMain from './components/CartMain.vue'

const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="wrap" :style="{ 
    'padding-bottom': safeAreaInsets?.bottom + 'px',
    '--window-bottom': safeAreaInsets?.bottom + 'px',
  }">
    <CartMain></CartMain>
  </view>
</template>

<style lang="scss">
.wrap {
  height: 100vh;
}
</style>
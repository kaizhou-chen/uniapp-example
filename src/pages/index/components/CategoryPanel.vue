<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

defineProps<{
  list: CategoryItem[]
}>()
</script>

<template>
  <view class="category">
    <navigator
      v-for="item in list"
      :key="item.id"
      hover-class="none"
      url="/pages/category/category"
      open-type="switchTab"
    >
      <view class="category-item">
        <image class="icon" :src="item.icon"></image>
        <text class="text">{{ item.name }}</text>
      </view>
    </navigator>
  </view>
</template>

<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
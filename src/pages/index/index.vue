<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/apiFactory'
import type { CategoryItem, HotItem } from '@/types/home'
import type { MyGuessInstance } from '@/types/component'
import MySwiper from '@/components/MySwiper.vue'
import MyGuess from '@/components/MyGuess.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

// 获取轮播图数据
const bannerList = ref([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result as any;
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 是否加载中
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true;

  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData()
  ])

  isLoading.value = false;
})

const guessRef = ref<MyGuessInstance>()

// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

const isTriggered = ref(false)

// 下拉刷新
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置数据
  guessRef.value?.resetData() 
  // 加载数据
  await Promise.all([
    getHomeBannerData(), 
    getHomeCategoryData(), 
    getHomeHotData(),
    guessRef.value?.getMore()
  ])
  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>

  <!-- 滚动容器 -->
  <scroll-view class="scroll-view" 
    scroll-y
    refresher-enabled 
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh" 
    @scrolltolower="onScrolltolower"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <MySwiper :list="bannerList"></MySwiper>
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <MyGuess ref="guessRef"></MyGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
/** 设置页面底色 */
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHotRecommendAPI } from '@/services/hot'
import type { SubTypeItem } from '@/types/hot'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// uniapp 获取页面参数
const query = defineProps<{
  type: string
}>()

const current = hotMap.find(x => x.type === query.type)
// 动态设置标题
uni.setNavigationBarTitle({ title: current!.title })

// 推荐封面图
const bannerPicture = ref('')
const subTypes = ref<(SubTypeItem & {finish?: boolean})[]>([])
const activeIndex = ref(0)

const getHotRecommendData = async () => {
  const res = await getHotRecommendAPI(current!.url)
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes
}

onLoad(() => {
  getHotRecommendData()
})

// 滚动触底
const onScrolltolower = async () => {
  // 获取当前选项
  const currentSubType = subTypes.value[activeIndex.value]

  // 分页条件
  if (currentSubType.goodsItems.page < currentSubType.goodsItems.pages) {
    // 当前页码累加
    currentSubType.goodsItems.page++
  } else {
    currentSubType.finish = true;
    uni.showToast({
      icon: 'none',
      title: '没有更多数据~'
    })
    return;
  }
  
  // 调用 API 传参
  const res = await getHotRecommendAPI(current!.url, {
    subType: currentSubType.id,
    page: currentSubType.goodsItems.page,
    pageSize: currentSubType.goodsItems.pageSize
  })

  // 追加新的数据
  const newSubTypes = res.result.subTypes[activeIndex.value]
  currentSubType.goodsItems.items.push(...newSubTypes.goodsItems.items)
}
</script>

<template>
  <!-- viewport 设置 padding-top 撑起高度，封面图使用绝对定位-->
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text 
        v-for="(item, index) in subTypes" 
        :key="item.id" class="text" 
        :class="{active: index === activeIndex}"
        @tap="activeIndex = index"
      >{{ item.title }}</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view 
      scroll-y 
      v-show="activeIndex === index" 
      v-for="(item, index) in subTypes" 
      :key="item.id" 
      class="scroll-view"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
          hover-class="none"
          class="navigator"
        >
          <image :src="goods.picture" class="thumb"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ subTypes[activeIndex].finish ? '没有更多数据~' : '正在加载...' }}
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
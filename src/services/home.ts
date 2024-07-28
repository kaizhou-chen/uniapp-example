import type { PageParams, PageResult } from "@/types/global";
import type { CategoryItem, GuessItem, HotItem } from "@/types/home";
import { http } from "@/utils/http";

// 首页-广告区域
export const getHomeBannerAPI = (type = 1) => {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      type
    }
  })
}

// 首页-前台分类-小程序
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/multi'
  })
}

// 首页-热门推荐-小程序
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/multi'
  })
}

// 首页-猜你喜欢
export const getHomeGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}
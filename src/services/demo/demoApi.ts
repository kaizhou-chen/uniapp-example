import type { PageParams, PageResult } from "@/types/global";
import type { CategoryItem, GuessItem, HotItem } from "@/types/home";
import type { HotResult } from '@/types/hot'
import type { CategoryTopItem } from "@/types/category";
import type { GoodsResult } from "@/types/goods";

import { bannerList, categoryList, hotList, guessLikePage } from './data/home'
import { hotPreferenceResult, hotInVogueResult, hotOneStopResult, hotNewResult } from './data/hot'
import { categoryTopResult } from './data/category'
import { goodsDetail } from "./data/_goodsDetail";

type HotParams = PageParams & { subType?: string }

interface Data<T> {
  code: string
  msg: string
  result: T
}

function mockRequest<T>(data: T) {
  return new Promise<Data<T>>((resolve, reject) => {
    const res = {
      status: 200,
      data: {
        code: '1',
        msg: 'success',
        result: data
      }
    }

    // mock 请求，返回复制的新对象，避免影响原始数据
    const result = JSON.parse(JSON.stringify(res.data))
    resolve(result as Data<T>);
  })
}

// 首页-广告区域
export const getHomeBannerAPI = (type = 1) => {
  return mockRequest<any>(bannerList)
}

// 首页-前台分类-小程序
export const getHomeCategoryAPI = () => {
  return mockRequest<CategoryItem[]>(categoryList)
}

// 首页-热门推荐-小程序
export const getHomeHotAPI = () => {
  return mockRequest<HotItem[]>(hotList)
}

// 首页-猜你喜欢
export const getHomeGuessLikeAPI = (data?: PageParams) => {
  return mockRequest<PageResult<GuessItem>>(guessLikePage)
}

// 通用热门推荐类型
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  let result = hotPreferenceResult

  if (url === '/hot/preference') {
    result = hotPreferenceResult
  } else if (url === '/hot/inVogue') {
    result = hotInVogueResult
  } else if (url === '/hot/oneStop') {
    result = hotOneStopResult
  } else if (url === '/hot/new') {
    result = hotNewResult
  }

 return mockRequest<HotResult>(result)
}

export const getCategoryTopAPI = () => {
  return mockRequest<CategoryTopItem[]>(categoryTopResult)
}

/**
 * 商品详情
 * @param id 
 * @returns 
 */
export const getGoodsByIdAPI = (id: string) => {
  return mockRequest<GoodsResult>(goodsDetail)
}
import * as home from './home'
import * as hot from './hot'
import * as demo from './demo/demoApi'

import type { PageParams } from "@/types/global";
type HotParams = PageParams & { subType?: string }

let isDemo = true;
let factory = demo

export const getHomeBannerAPI = (type?: number) => {
  return factory.getHomeBannerAPI(type)
}

export const getHomeCategoryAPI = () => {
  return factory.getHomeCategoryAPI()
}

export const getHomeHotAPI = () => {
  return factory.getHomeHotAPI()
}

export const getHomeGuessLikeAPI = (data?: PageParams) => {
  return factory.getHomeGuessLikeAPI(data)
}

export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return factory.getHotRecommendAPI(url, data)
}
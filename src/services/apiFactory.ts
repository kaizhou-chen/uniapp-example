import * as home from './home'
import * as demo from './demo/demoApi'

import type { PageParams } from "@/types/global";

let isDemo = true;
let factory = isDemo ? demo : home

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
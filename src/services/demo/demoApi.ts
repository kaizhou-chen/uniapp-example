import type { PageParams, PageResult } from "@/types/global";
import type { CategoryItem, GuessItem, HotItem } from "@/types/home";
import type { HotResult } from '@/types/hot'
import type { CategoryTopItem } from "@/types/category";
import type { GoodsResult } from "@/types/goods";
import type { ProfileDetail, LoginResult, ProfileParams } from "@/types/member";
import type { AddressParams, AddressItem } from '@/types/address'

import { http } from '@/utils/http'
import { bannerList, categoryList, hotList, guessLikePage } from './data/home'
import { hotPreferenceResult, hotInVogueResult, hotOneStopResult, hotNewResult } from './data/hot'
import { categoryTopResult } from './data/category'
import { goodsDetail } from "./data/_goodsDetail";
import { loginResult } from "./data/login";
import { profileResult } from './data/profile'
import { addressList } from './data/address'


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
  try {
    http<any[]>({
      method: 'GET',
      url: '/home/banner'
    })
  } catch(e) {}
  
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

// 分类列表
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

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWxMinAPI = (data: LoginParams) => {
  return mockRequest<LoginResult>(loginResult)
}

/**
 * 模拟登录
 * @param phoneNumber 手机号码
 * @returns 
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return mockRequest<LoginResult>(loginResult)
}

/**
 * 个人信息
 * @returns 
 */
export const getMemberProfileAPI = () => {
  return mockRequest<ProfileDetail>(profileResult)
}

/**
 * 修改个人信息
 * @param data 
 * @returns 
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  Object.assign(profileResult, data)
  return mockRequest({})
}

/**
 * 添加收货地址
 * @param data 
 * @returns 
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  if (data.isDefault) {
    addressList.forEach(x => {
      x.isDefault = 0
    })
  }

  addressList.push({
    id: String(new Date().getTime()),
    ...data
  })
  return mockRequest({})
}

/**
 * 获取收货地址
 * @returns 
 */
export const getMemberAddressAPI = () => {
  return mockRequest<AddressItem[]>(addressList)
}

/**
 * 查询收货地址
 * @param id 
 * @returns 
 */
export const getMemberAddressByIdAPI = (id: string) => {
  const result = addressList.find(x => x.id === id)
  return mockRequest<AddressItem>(result!)
}

/**
 * 修改收货地址
 * @param id 
 * @param data 
 * @returns 
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  const address = addressList.find(x => x.id === id)
  Object.assign(address!, data)
  return mockRequest({})
}

/**
 * 删除收货地址
 * @param id 
 * @param data 
 * @returns 
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  const index = addressList.findIndex(x => x.id === id)
  console.log('index', index)
  addressList.splice(index, 1)
  return mockRequest({})
}
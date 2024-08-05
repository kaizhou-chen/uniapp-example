import { ref } from 'vue'
import type { MyGuessInstance } from '@/types/component'

/**
 * 猜你喜欢的组合式函数
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<MyGuessInstance>()

  // 滚动触底
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower
  }
}
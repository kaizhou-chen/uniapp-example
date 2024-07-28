/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
  }
}

import MyGuess from '@/components/MyGuess.vue'

// 组件实例类型 InstanceType
export type MyGuessInstance = InstanceType<typeof MyGuess>

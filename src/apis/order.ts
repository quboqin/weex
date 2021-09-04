import { result } from '@/utils/axios'

export function payOrder<T, U>(params: T): Promise<U | void> {
  return result('post', '/orders', params)
}

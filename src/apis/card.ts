import { result } from '@/utils/axios'

import { Card } from 'quboqin-lib-typescript/lib/card'

export function getAllCards<T, U>(params: T): Promise<U | void> {
  return result('get', '/cards', params)
}

export function createCard<T, U>(params: T): Promise<U | void> {
  return result('post', '/cards', params)
}

export function deleteCard<T, U>(params: T): Promise<U | void> {
  return result('del', '/cards', params)
}

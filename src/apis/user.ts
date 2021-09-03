import { result } from '@/utils/axios'

import { User } from 'quboqin-lib-typescript/lib/user'

export function getUserByPhone<T,U>(
  params: T,
): Promise<U | void> {
  return result('get', '/users', params)
}

export function createUser<T, U>(params: T): Promise<U | void> {
  return result('post', '/users', params)
}

export function createAddress<T, U>(params: T): Promise<U | void> {
  return result('post', '/addresses', params)
}


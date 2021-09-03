import { result, AxioFunc } from '@/utils/axios'

export const getAllGoods: AxioFunc = (
  params: Record<string, unknown> = {},
) => {
  return result('get', '/goods', params)
}
import axios from 'axios'

import { getUser } from '@/utils/auth'

const port = import.meta.env.VITE_APP_PORT
const url = import.meta.env.VITE_APP_URL ?? import.meta.env.VITE_APP_BASE_URL
console.log(import.meta.env.VITE_APP_BASE_URL)
axios.defaults.baseURL = port ? `${url}:${import.meta.env.VITE_APP_PORT}` : `${url}`
axios.defaults.timeout = import.meta.env.VITE_APP_TIMEOUT
  ? +import.meta.env.VITE_APP_TIMEOUT
  : 5000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(
  async (config) => {
    const user = await getUser()
    config.headers.userId = user?.firstName
    
    return config
  },
)


function get(path: string, params: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .get(path, {
        params: params,
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function post(path: string, params: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .post(path, params)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function put(path: string, params: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .put(path, params)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function del(path: string, params: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .delete(path, {
        params: params,
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function request(
  method: string,
  path: string,
  params: Record<string, unknown>,
): Promise<unknown> | Promise<void> {
  if (method === 'get') {
    return get(path, params)
  } else if (method === 'del') {
    return del(path, params)
  } else if (method === 'post') {
    return post(path, params)
  } else if (method === 'put') {
    return put(path, params)
  } else {
    return new Promise<void>((resolve) => resolve())
  }
}

export type AxioFunc = (params: Record<string, unknown>) => Promise<unknown>

export function result(
  method: string,
  path: string,
  params: Record<string, unknown>,
  mockData?: boolean,
): Promise<unknown> {
  return new Promise((resolve) => {
    if (mockData) return resolve(mockData)
    return resolve(request(method, path, params))
  })
}

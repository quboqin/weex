import { provide, inject, reactive } from 'vue'
import { CognitoUser } from 'amazon-cognito-identity-js'

import { User } from 'quboqin-lib-typescript/lib/user'
import { Item } from 'quboqin-lib-typescript/lib/item'

export interface UserInfo {
  user: User
  cognitoUser?: CognitoUser
  cart?: {
    items?: Item[]
    totalPrice: number
    tax: number
    deliverDate: string
  }
}

type UserInfoContext = {
  userInfo: UserInfo
  setCognitoUser: (cognitoUser: CognitoUser) => void
  setUserInfo: (newUser: UserInfo) => void
  addCart: (newItem: Item) => void
}

const UserAuthSymbol = Symbol()

export const userAuthProvide: (newUser: UserInfo) => void = newUser => {
  const userInfo = reactive<UserInfo>(newUser)

  const setCognitoUser = (cognitoUser: CognitoUser) =>
    (userInfo.cognitoUser = cognitoUser)

  const setUserInfo = (newUser: UserInfo) => {
    Object.assign(userInfo, newUser)
  }

  const addCart = (newItem: Item) => {
    userInfo.cart?.items?.push(newItem)
    let price = 0.0
    userInfo.cart?.items?.forEach(item => {
      price += item.amount * item.price
    })
    if (userInfo.cart) {
      userInfo.cart.totalPrice = price
    }
  }

  provide(UserAuthSymbol, {
    userInfo,
    setCognitoUser,
    setUserInfo,
    addCart,
  })
}

export const userAuthInject: () => UserInfoContext = () => {
  const userAuthContext = inject<UserInfoContext>(UserAuthSymbol)

  if (!userAuthContext) {
    throw new Error(`userAuthInject must be used after userAuthProvide`)
  }

  return userAuthContext
}

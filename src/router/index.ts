import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { getUser } from '@/utils/auth'

import Home from '#/Home.vue'
import Profile from '#/Profile.vue'
import Sign from '#/Sign.vue'
import OrderList from '#/OrderList.vue'
import OrderDetail from '#/OrderDetail.vue'
import Cart from '#/Cart.vue'
import Checkout from '#/Checkout.vue'
import AddressList from '#/AddressList.vue'
import AddressDetail from '#/AddressDetail.vue'
import CreditCardList from '#/CreditCardList.vue'
import CreditCardDetail from '#/CreditCardDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: false },
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: OrderList,
    meta: { requiresAuth: false },
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: { requiresAuth: false },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { requiresAuth: false },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: { requiresAuth: false },
  },
  {
    path: '/address-list',
    name: 'AddressList',
    component: AddressList,
    meta: { requiresAuth: false },
  },
  {
    path: '/address-detail',
    name: 'AddressDetail',
    component: AddressDetail,
    meta: { requiresAuth: false },
  },
  {
    path: '/credit-card-list',
    name: 'CreditCardList',
    component: CreditCardList,
    meta: { requiresAuth: false },
  },
  {
    path: '/credit-card-detail',
    name: 'CreditCardDetail',
    component: CreditCardDetail,
    meta: { requiresAuth: false },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const user = await getUser()
  if (!user && to.matched.some(record => record.meta.requiresAuth)) {
    return next({
      name: 'sign',
    })
  }
  return next()
})

export default router

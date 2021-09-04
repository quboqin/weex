<template>
  <Header title="购物车"></Header>
  <div class="mt-14 my-2 mx-4 bg-white rounded-md">
    <div class="flex justify-between items-center p-2 pb-0">
      <p class="text-sm text-gray-500">本地配送</p>
      <p class="text-sm text-gray-500">
        {{ items.length }}件商品共:
        <span class="text-base text-gray-800 font-semibold">
          ${{ totalPrice }}</span
        >
      </p>
    </div>
    <div class="flex justify-between items-center p-2 pb-0">
      <p class="text-sm text-blue-700">{{ deliverDate }}</p>
      <p class="text-sm text-gray-500">免费配送</p>
    </div>
    <hr class="bg-gray-800 my-2" />
    <CartItemCell
      v-for="(item, index) in items"
      :item="item"
      :key="index"
    ></CartItemCell>
  </div>
  <div
    class="rounded-full bg-blue-500 flex justify-between items-center m-3 mx-4"
    @click="onCheckout"
  >
    <div></div>
    <div class="text-white font-semibold text-lg my-2">去结算</div>
    <div class="rounded-full bg-blue-700 mr-2 px-2 py-1 text-white text-sm">
      ${{ totalPrice }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'

import Header from '@/components/HeaderWithBack.vue'
import CartItemCell from '@/components/CartItemCell.vue'

import { userAuthInject } from '@/store/user'
import { Item } from 'quboqin-lib-typescript/lib/item'

export default defineComponent({
  name: 'Cart',
  components: {
    Header,
    CartItemCell,
  },
  setup() {
    const router = useRouter()
    const { userInfo } = userAuthInject()

    const state = reactive({
      deliverDate: userInfo.cart?.deliverDate,
      totalPrice: userInfo.cart?.totalPrice,
      items: userInfo.cart?.items ? userInfo.cart.items : ([] as Item[]),
    })

    function onCheckout() {
      router.push({
        name: 'Checkout',
        params: {
          totalPrice: state.totalPrice,
        },
      })
    }

    return {
      ...toRefs(state),
      onCheckout,
    }
  },
})
</script>

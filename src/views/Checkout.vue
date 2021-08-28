<template>
  <Header title="结账"></Header>
  <div class="mt-14 mx-2">
    <div class="flex justify-between items-center m-4 mx-12">
      <div class="bg-green-500 text-white rounded-full p-2 px-3">
        <p class="text-xs">7/10</p>
        <p class="text-sm font-extrabold">周六</p>
      </div>
      <div class="bg-white text-gray-800 rounded-full p-2 px-3">
        <p class="text-xs">7/11</p>
        <p class="text-sm font-extrabold">周日</p>
      </div>
      <div class="bg-white text-gray-800 rounded-full p-2 px-3">
        <p class="text-xs">7/12</p>
        <p class="text-sm font-extrabold">周一</p>
      </div>
    </div>
    <div class="text-left text-sm">配送信息</div>
    <div
      class="
        my-1
        text-gray-600
        bg-white
        rounded-md
        flex
        items-center
        justify-between
        p-2
      "
    >
      <div class="w-2/3">
        <div class="text-left font-semibold text-base text-gray-800">
          {{ `${addresses[0].firstName} ${addresses[0].lastName}` }}
        </div>
        <div class="text-left text-xs text-gray-400 overflow-ellipsis">
          {{ addresses[0].address }}
        </div>
        <br />
        <div class="text-left text-xs text-gray-400 overflow-ellipsis">
          {{ addresses[0].email }}
        </div>
        <div class="text-left text-xs text-gray-400 overflow-ellipsis">
          {{ addresses[0].tel }}
        </div>
      </div>
      <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
    </div>
    <div class="text-left text-sm mt-2">选择信用卡</div>
    <div
      class="
        my-1
        text-gray-600
        bg-white
        rounded-md
        flex
        items-center
        justify-between
        p-2
      "
    >
      <div class="text-left text-xs text-gray-400 overflow-ellipsis">
        请选择您的支付方式
      </div>
      <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
    </div>
    <div class="text-left text-sm mt-2">司机小费</div>
    <div
      class="
        flex
        justify-between
        items-center
        text-gray-800
        font-medium
        py-2
        mx-2
      "
    >
      <div class="rounded-md bg-green-400 p-2 px-8">$1</div>
      <div class="rounded-md bg-green-400 p-2 px-8">$2</div>
      <div class="rounded-md bg-green-400 p-2 px-8">$3</div>
    </div>
    <div class="text-left text-sm mt-2">订单总结</div>
    <div class="my-1 text-sm text-gray-500 bg-white rounded-md p-2">
      <div class="flex justify-between py-1">
        <p>税</p>
        <p class="text-right">$0.00</p>
      </div>
      <div class="flex justify-between py-1">
        <p>运费</p>
        <p class="text-right">$0.00</p>
      </div>
      <div class="flex justify-between py-1">
        <p>小费</p>
        <p class="text-right">$2.00</p>
      </div>
      <div class="flex justify-between py-1">
        <p>合计</p>
        <p class="text-right">$50.00</p>
      </div>
    </div>
    <div
      class="
        rounded-full
        bg-blue-500
        flex
        justify-between
        items-center
        m-3
        mx-4
      "
      @click="onPay"
    >
      <div></div>
      <div class="text-white font-semibold text-lg my-2">付款</div>
      <div class="rounded-full bg-blue-700 mr-2 px-2 py-1 text-white text-sm">
        ${{ orderList[0].totalPrice }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import Header from '@/components/HeaderWithBack.vue'

import orderList from '@/mock/orders.json'
import addresses from '@/mock/addesses.json'

export default defineComponent({
  name: 'Checkout',
  components: {
    Header,
  },
  setup() {
    const state = reactive({
      orderList,
      addresses,
    })

    function onPay() {}

    return {
      ...toRefs(state),
      onPay,
    }
  },
})
</script>

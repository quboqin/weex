<template>
  <Header>
    <template #default>
      <div>我的</div>
    </template>
  </Header>
  <div class="mt-14">
    <div
      class="
        my-2
        mx-4
        flex
        items-center
        justify-between
        bg-white
        rounded-md
        px-2
      "
    >
      <div class="flex items-center justify-start">
        <van-image
          class="my-2"
          round
          width="3rem"
          height="3rem"
          :src="avatarUrl"
        />
        <div class="ml-2 text-gray-600 text-left">
          <div class="font-semibold">QQB</div>
          <div>ID: weee7343219</div>
        </div>
      </div>
      <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
    </div>
    <div class="mx-4 my-3 text-gray-600 bg-white rounded-md">
      <div class="pl-2 pt-2 text-left">我的订单</div>
      <hr class="bg-gray-800 my-2" />
      <div class="flex justify-between py-2 px-4">
        <div class="" v-for="(type, index) in orderTypes" :key="index">
          <img class="mx-auto h-8 w-8" :src="orderImages[index]" />
          <div class="text-center text-xs">
            {{ type }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        mx-4
        my-3
        text-gray-600
        bg-white
        rounded-md
        flex
        items-center
        justify-between
        p-2
      "
      @click="onAddressList"
    >
      <div>我的地址</div>
      <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
    </div>
    <div
      class="
        mx-4
        my-3
        text-gray-600
        bg-white
        rounded-md
        flex
        items-center
        justify-between
        p-2
      "
    >
      <div>我的信用卡</div>
      <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
    </div>
  </div>
  <tab-bar></tab-bar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import Header from '@/components/Header.vue'
import TabBar from '@/components/TabBar.vue'
import avatarUrl from '@/assets/avatar.jpg'
import clock from '@/assets/icons8-clock-64.png'
import box from '@/assets/icons8-box-64.png'
import trunk from '@/assets/icons8-boot-open-64.png'

export default defineComponent({
  name: 'Profile',
  components: {
    Header,
    TabBar,
  },
  setup() {
    const router = useRouter()

    const state = reactive({
      avatarUrl,
      orderTypes: ['全部订单', '待付款', '待发货'],
      orderImages: [clock, box, trunk],
    })

    function onAddressList() {
      router.push('address-list')
    }

    return {
      ...toRefs(state),
      onAddressList,
    }
  },
})
</script>

<template>
  <Header title="我的地址"></Header>
  <div class="mt-14">
    <van-cell-group inset>
      <van-field v-model="firstName" type="text" label="First Name" />
      <van-field v-model="lastName" type="text" label="Last Name" />
      <van-field v-model="tel" type="text" label="Tel" />
      <van-field v-model="email" type="text" label="Email" />
      <van-field v-model="address" type="text" label="Address" />
    </van-cell-group>
    <div class="flex justify-center items-center pt-3">
      <van-checkbox v-model="isDefault" shape="square"
        >设置为默认地址</van-checkbox
      >
    </div>
    <div class="mx-4 mt-4">
      <van-button round type="success" size="large">保存</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/HeaderWithBack.vue'

interface UserInfo {
  firstName: string
  lastName: string
  tel: string
  email: string
  isDefault: string
}

export default defineComponent({
  name: 'AddressDetail',
  components: {
    Header,
  },
  setup() {
    const route = useRoute()

    const state = reactive({
      firstName: route.params.firstName,
      lastName: route.params.lastName,
      tel: route.params.tel,
      email: route.params.email,
      address: route.params.address,
      isDefault: route.params.isDefault === '1',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

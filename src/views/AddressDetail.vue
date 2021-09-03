<template>
  <Header title="我的地址"></Header>
  <div class="mt-14">
    <van-cell-group inset>
      <van-field v-model="street" type="text" label="Street" />
      <van-field v-model="city" type="text" label="City" />
      <van-field v-model="zipCode" type="text" label="Zip Code" />
    </van-cell-group>
    <div class="flex justify-center items-center pt-4">
      <van-checkbox v-model="isDefault" shape="square"
        >设置为默认地址</van-checkbox
      >
    </div>
    <div class="mx-4 mt-4">
      <van-button round type="success" size="large" @click=onSave>保存</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

import { userAuthInject } from '@/store/user'

import { createAddress } from '@/apis/user'

import Header from '@/components/HeaderWithBack.vue'

export default defineComponent({
  name: 'AddressDetail',
  components: {
    Header,
  },
  setup() {
    const route = useRoute()
    const { userInfo } = userAuthInject()

    const state = reactive({
      phone: userInfo.user.phone,
      street: route.params.street,
      city: route.params.city,
      zipCode: route.params.zipCode,
      isDefault: false,
    })

    async function onSave() {
      await createAddress(state)
    }

    return {
      ...toRefs(state),
      onSave
    }
  },
})
</script>

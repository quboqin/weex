<template>
  <Header title="编辑信用卡"></Header>
  <div class="mt-14">
    <van-cell-group inset>
      <van-field v-model="code" type="text" label="Code" />
      <van-field v-model="year" type="number" label="Year" />
      <van-field v-model="month" type="number" label="Month" />
      <van-field v-model="cvc" type="number" label="CVC" />
      <van-field v-model="postCode" type="number" label="Post Code" />
    </van-cell-group>
    <div class="flex justify-center items-center pt-3">
      <van-checkbox v-model="isDefault" shape="square"
        >设置为默认银行卡</van-checkbox
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

export default defineComponent({
  name: 'CreditCardDetail',
  components: {
    Header,
  },
  setup() {
    const route = useRoute()

    const state = reactive({
      code: route.params.code,
      year: route.params.year,
      month: route.params.month,
      cvc: route.params.cvc,
      postCode: route.params.postCode,
      isDefault: route.params.isDefault === '1',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

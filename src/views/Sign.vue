<template>
  <Header title="登入或注册"></Header>
  <div class="mt-14">
    <van-tabs v-model:active="active" background="#fee2e2">
      <van-tab
        v-for="(item, index) in ['手机', '邮箱']"
        :title="item"
        :key="index"
      >
        <div class="container mx-auto p-4">
          <van-cell-group>
            <van-field
              v-if="item === '手机'"
              v-model="tel"
              type="tel"
              :label="item"
            />
            <van-field v-else v-model="email" type="email" :label="item" />
            <van-field v-model="digit" type="digit" label="验证码">
              <template v-slot:button>
                <van-button
                  round
                  type="danger"
                  size="mini"
                  @click="getVerifyCode"
                  >获取验证码</van-button
                >
              </template>
            </van-field>
          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>

    <div class="mx-4 mt-4">
      <van-button round type="success" size="large">立即登录</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import Header from '@/components/HeaderWithBack.vue'

export default defineComponent({
  name: 'Sign',
  components: {
    Header,
  },
  setup() {
    const state = reactive({
      tel: '+16264895188',
      email: 'quboqin0710@gmail.com',
      digit: '1234',
      active: 0,
    })

    function getVerifyCode() {
      console.log('get verify code')
    }

    return {
      ...toRefs(state),
      getVerifyCode,
    }
  },
})
</script>

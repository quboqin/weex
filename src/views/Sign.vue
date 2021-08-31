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
            <van-field v-model="code" type="digit" label="验证码">
              <template v-slot:button>
                <van-button
                  round
                  type="danger"
                  size="mini"
                  @click="onSignIn"
                  >获取验证码</van-button
                >
              </template>
            </van-field>
          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>

    <div class="mx-4 mt-4">
      <van-button round type="success" size="large" @click="onSubmitOTP">立即登录</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import { createUser } from '@/apis/user'
import { UserInfo, userAuthInject } from '@/store/user'
import { signIn, sendCustomChallengeAnswer } from '@/utils/aws-auth'

import Header from '@/components/HeaderWithBack.vue'

export default defineComponent({
  name: 'Sign',
  components: {
    Header,
  },
  setup() {
    const router = useRouter()
    const { userInfo, setCognitoUser, setUserInfo } = userAuthInject()

    const state = reactive({
      tel: '+13233013227',
      email: 'quboqin0710@gmail.com',
      code: '1234',
      active: 0,
    })

    const telRef = toRef(state, 'tel')
    const codeRef = toRef(state, 'code')

    async function onSignIn(): Promise<void> {
      try {
        const cognitoUser = await signIn(
          telRef.value,
          true,
          'Qubo',
          'Qin',
        )

        const userInfo: UserInfo = {
          cognitoUser: cognitoUser,
          user: {
            phone: telRef.value,
          },
        }

        setUserInfo(userInfo)
      } catch (error) {
        console.log(error.message)
      }
      console.log(`onSignIn - setCognitoUser`)
    }

    function onReset(): void {
      telRef.value = ''
      console.log(`onReset`)
    }

    async function onSubmitOTP(): Promise<void> {
      const cognitoUser = userInfo.cognitoUser
      if (cognitoUser) {
        try {
          await sendCustomChallengeAnswer(cognitoUser, codeRef.value)
          await createUser({
            phone: telRef.value,
          })
          setUserInfo({
            cognitoUser: userInfo.cognitoUser,
            user: {
              phone: telRef.value,
            },
          })
          router.push({
            path: '/',
          })
        } catch (error) {
          if (error.code === 'UserLambdaValidationException') {
            const _cognitoUser = await signIn(
              cognitoUser.getUsername(),
              true,
              'Qubo',
              'Qin',
            )
            setCognitoUser(_cognitoUser)
          }
        }
      }
      console.log(`onSubmit`)
    }

    return {
      ...toRefs(state),
      onSignIn,
      onSubmitOTP,
    }
  },
})
</script>

<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'

import { userAuthProvide, UserInfo } from '@/store/user'
import { User } from 'quboqin-lib-typescript/lib/user'
import { Item } from 'quboqin-lib-typescript/lib/item'
import { checkHealth } from '@/apis/health'

export default defineComponent({
  name: 'App',
  setup() {
    const newUser: UserInfo = reactive({
      user: new User(),
      cart: {
        deliverDate: '2-2-2008',
        totalPrice: 0.0,
        tax: 0.0,
        items: [] as Item[],
      },
    })
    newUser.user.phone = '+13233013227'
    userAuthProvide(newUser)

    const init = async () => {
      checkHealth({})
    }
    onMounted(init)
  },
})
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fee2e2;
}
</style>

<template>
  <Header title="我的地址"></Header>
  <div class="mt-14">
    <div class="text-left mx-4">我的收货地址</div>
    <AddressCell
      v-for="(address, index) in addresses"
      :key="index"
      :firstName="user.firstName"
      :lastName="user.lastName"
      :address="address"
      :isDefault="address.id === user.defaultAddress"
      @click="onEditAddress(index)"
      class="my-2 mx-4"
    ></AddressCell>
    <div class="text-left mx-4 text-blue-400" @click="onAddAddress">
      添加新的地址
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, Ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { userAuthInject } from '@/store/user'
import { getUserByPhone, getAllAddresses } from '@/apis/user'
import { Address } from 'quboqin-lib-typescript/lib/address'
import { User } from 'quboqin-lib-typescript/lib/user'

import Header from '@/components/HeaderWithBack.vue'
import AddressCell from '@/components/AddressCell.vue'

export default defineComponent({
  name: 'AddressList',
  components: {
    Header,
    AddressCell,
  },
  setup() {
    const router = useRouter()
    const { userInfo } = userAuthInject()

    const user = ref(userInfo.user)
    const addresses = ref(user.value.addresses)

    function onEditAddress(index: number) {
      const address = addresses.value ? addresses.value[index] : undefined
      router.push({
        name: 'AddressDetail',
        params: {
          zipCode: address?.zipCode,
          city: address?.city,
          street: address?.street,
        },
      })
    }

    function onAddAddress() {
      router.push({
        name: 'AddressDetail',
        params: undefined,
      })
    }

    const getAddresses = async () => {
      addresses.value = (await getAllAddresses({
        phone: user.value.phone,
      })) as Address[]

      user.value = (await getUserByPhone({
        phone: user.value.phone,
      })) as User
    }
    onMounted(getAddresses)

    return {
      user,
      addresses,
      onEditAddress,
      onAddAddress,
    }
  },
})
</script>

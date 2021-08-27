<template>
  <Header title="我的地址"></Header>
  <div class="mt-14">
    <div class="text-left mx-4">我的收货地址</div>
    <AddressCell
      v-for="(item, index) in addresses"
      :key="index"
      :item="item"
      @click="onEditAddress(index)"
    ></AddressCell>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import Header from '@/components/HeaderWithBack.vue'
import AddressCell from '@/components/AddressCell.vue'

import addresses from '@/mock/addesses.json'

export default defineComponent({
  name: 'AddressList',
  components: {
    Header,
    AddressCell,
  },
  setup() {
    const router = useRouter()

    const state = reactive({
      addresses,
    })

    function onEditAddress(index: number) {
      router.push({
        name: 'AddressDetail',
        params: addresses[index],
      })
    }

    return {
      ...toRefs(state),
      onEditAddress,
    }
  },
})
</script>

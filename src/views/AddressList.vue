<template>
  <Header title="我的地址"></Header>
  <div class="mt-14">
    <div class="text-left mx-4">我的收货地址</div>
    <AddressCell
      v-for="item in addresses"
      :key="item.name"
      :item="item"
    ></AddressCell>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

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
    const state = reactive({
      addresses,
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

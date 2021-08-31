<template>
  <div class="flex items-center justify-between bg-white rounded-md p-2">
    <div class="flex items-center justify-start w-7/12">
      <p
        class="
          mdi mdi-map-marker-radius-outline
          text-3xl text-center
          leading-none
          text-gray-500
        "
        v-if="address.isDefault === '1'"
      ></p>
      <div v-else></div>
      <div class="text-left pl-2">
        <div class="text-base font-semibold">
          {{ `${address.firstName} ${address.lastName}` }}
        </div>
        <div class="text-xs text-gray-400">
          {{ address.address }}
        </div>
      </div>
    </div>
    <p
      class="
        mdi mdi-chevron-right
        text-3xl text-center
        leading-none
        text-gray-500
      "
    ></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'AddressCell',
  props: {
    address: {
      type: Object as PropType<User>,
      required: true,
    },
  },
})
</script>

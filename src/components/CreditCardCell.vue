<template>
  <div
    class="my-2 mx-4 flex items-center justify-between bg-white rounded-md p-2"
  >
    <div class="flex items-center justify-start">
      <p
        class="mdi mdi-credit-card-outline text-3xl text-center leading-none"
        v-if="item.isDefault === '1'"
      ></p>
      <div v-else></div>
      <div class="text-base font-semibold pl-2 text-gray-400">
        {{ item.code }}
      </div>
    </div>
    <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CreditCardCell',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <div
    class="my-2 mx-4 flex items-center justify-between bg-white rounded-md p-2"
  >
    <div class="flex items-center justify-start w-7/12">
      <p
        class="
          mdi mdi-map-marker-radius-outline
          text-3xl text-center
          leading-none
        "
        v-if="item.isDefault"
      ></p>
      <div v-else></div>
      <div class="text-left pl-2">
        <div class="text-base font-semibold">{{ item.name }}</div>
        <div class="text-xs text-gray-400">
          {{ item.address }}
        </div>
      </div>
    </div>
    <p class="mdi mdi-chevron-right text-3xl text-center leading-none"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddressCell',
  props: ['item'],
})
</script>

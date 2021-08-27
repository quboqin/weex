<template>
  <div class="p-2">
    <div class="rounded-md bg-white pb-1">
      <div class="relative">
        <img
          class="h-48 mx-auto rounded-t-md"
          :src="item.img"
          style="object-fit: cover"
        />
        <div
          class="
            absolute
            top-0
            mt-2
            ml-3
            py-1
            px-2
            rounded-md
            text-sm text-white
            bg-red-600
          "
        >
          10% off
        </div>
      </div>
      <div class="text-sm text-left truncate px-2">
        {{ item.desc }}
      </div>
      <div class="text-base text-left text-red-500 font-semibold pl-2">
        ${{ item.price }}
      </div>
      <p class="mdi mdi-plus-circle-outline text-2xl" @click="onAdd"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GoodCell',
  props: ['item'],
  setup() {
    function onAdd() {
      console.log('add this item into cart')
    }

    return {
      onAdd,
    }
  },
})
</script>

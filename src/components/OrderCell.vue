<template>
  <div class="my-2 mx-4 bg-white rounded-md">
    <div class="flex justify-between items-center px-2 pt-1">
      <p class="text-sm text-gray-500">到货时间 {{ item.deliverDate }}</p>
      <p class="text-sm text-gray-400">{{ item.status }}</p>
    </div>
    <hr class="bg-gray-800 my-2" />
    <div>
      <div class="flex justify-start items-center">
        <div
          v-for="(_item, index) in item.items"
          :key="index"
          class="relative m-2"
        >
          <img
            :src="_item.img"
            alt=""
            class="w-12 h-12 rounded-md"
            style="object-fit: cover"
          />
          <p
            class="
              absolute
              -top-2
              -right-2
              rounded-md
              bg-red-700
              text-xs text-center
              leading-none
              p-1
              text-white
            "
          >
            {{ _item.amount }}
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center px-2">
        <p class="text-xs text-gray-300">订单编号: {{ item.id }}</p>
        <p class="text-xs text-red-600 font-semibold">${{ item.totalPrice }}</p>
      </div>
    </div>
    <hr class="bg-gray-800 my-2" />
    <div class="flex justify-end items-center pb-2">
      <div
        class="
          bg-gray-300
          rounded-lg
          text-xs text-center
          leading-none
          py-1
          px-3
          mx-2
        "
      >
        查看物流
      </div>
      <div
        class="
          bg-gray-300
          rounded-lg
          text-xs text-center
          leading-none
          py-1
          px-3
          mx-2
        "
      >
        售后
      </div>
      <div
        class="
          bg-gray-300
          rounded-lg
          text-xs text-center
          leading-none
          py-1
          px-3
          mx-2
        "
      >
        再来一单
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrderCell',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {},
})
</script>

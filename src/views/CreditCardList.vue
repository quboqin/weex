<template>
  <Header title="我的信用卡"></Header>
  <div class="mt-14">
    <div class="text-left mx-4">我的信用卡</div>
    <CreditCardCell
      v-for="(card, index) in creditCards"
      :key="index"
      :card="card"
      @click="onEditCreditCard(index)"
      class="my-2 mx-4"
    ></CreditCardCell>
    <div class="text-left mx-4 text-blue-400" @click="onAddCreditCard">
      添加新的信用卡
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import Header from '@/components/HeaderWithBack.vue'
import CreditCardCell from '@/components/CreditCardCell.vue'

import creditCards from '@/mock/credit-cards.json'

export default defineComponent({
  name: 'CreditCardList',
  components: {
    Header,
    CreditCardCell,
  },
  setup() {
    const router = useRouter()

    const state = reactive({
      creditCards,
    })

    function onEditCreditCard(index: number) {
      router.push({
        name: 'CreditCardDetail',
        params: creditCards[index],
      })
    }

    function onAddCreditCard() {
      router.push({
        name: 'CreditCardDetail',
        params: undefined,
      })
    }

    return {
      ...toRefs(state),
      onEditCreditCard,
      onAddCreditCard,
    }
  },
})
</script>

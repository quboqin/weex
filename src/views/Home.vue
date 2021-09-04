<template>
  <Header>
    <template #left>
      <p class="mdi mdi-view-grid-outline"></p>
    </template>

    <template #default>
      <van-search
        v-model="searchValue"
        placeholder="请输入要搜索的商品"
        background="#4fc08d00"
        shape="round"
        clearable
      />
    </template>

    <template #right>
      <p class="mdi mdi-cart" @click="onCart"></p>
    </template>
  </Header>
  <div class="mt-14">
    <van-tabs v-model:active="active" background="#fee2e2">
      <van-tab
        v-for="(item, index) in category"
        :title="item.name"
        :key="index"
      >
        <div class="flex flex-wrap justify-start">
          <GoodCell
            v-for="(item, index) in goods"
            :key="item.id"
            :item="item"
            class="w-1/2"
            @add-cart="addLocalCart(index)"
          >
          </GoodCell>
        </div>
      </van-tab>
    </van-tabs>
  </div>
  <TabBar></TabBar>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Header from '@/components/Header.vue'
import GoodCell from '@/components/GoodCell.vue'
import TabBar from '@/components/Tabbar.vue'

import category from '@/mock/category.json'
import { Good } from 'quboqin-lib-typescript/lib/goods'
import { Item } from 'quboqin-lib-typescript/lib/item'
import { getAllGoods } from '@/apis/goods'
import { userAuthInject } from '@/store/user'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    GoodCell,
    TabBar,
  },
  setup() {
    const router = useRouter()
    const { addCart } = userAuthInject()

    const state = reactive({
      category,
      goods: [] as Good[],
      searchValue: '',
      active: 0,
    })

    function onCart() {
      router.push('cart')
    }

    function addLocalCart(index: number) {
      const item = new Item()
      item.amount = 1
      item.goodsId = state.goods[index].id
      item.imgUrl = state.goods[index].imgUrl
      item.price = state.goods[index].price
      item.name = state.goods[index].name
      addCart(item)
    }

    watch(
      () => state.searchValue,
      newValue => {
        console.log('The new search value is: ' + newValue)
      },
    )

    const init = async () => {
      state.goods = (await getAllGoods({})) as Good[]
    }
    onMounted(init)

    return {
      ...toRefs(state),
      onCart,
      addLocalCart,
    }
  },
})
</script>

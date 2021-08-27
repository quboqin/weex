<template>
  <div class="h-full">
    <Header>
      <template v-slot:left>
        <p class="mdi mdi-view-grid-outline"></p>
      </template>

      <template v-slot:default>
        <van-search
          v-model="searchValue"
          placeholder="请输入要搜索的商品"
          background="#4fc08d00"
          shape="round"
        />
      </template>

      <template v-slot:right>
        <p class="mdi mdi-cart"></p>
      </template>
    </Header>
    <div class="mt-14">
      <van-tabs v-model:active="active" background="#fee2e2">
        <van-tab
          v-for="(category, index) in categoryList"
          :title="category.name"
          :key="index"
        >
          <div class="flex flex-wrap justify-start">
            <GoodCell
              v-for="item in goods"
              :key="item.goodsId"
              :item="item"
              class="w-1/2"
            >
            </GoodCell>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from 'vue'

import Header from '@/components/Header.vue'
import GoodCell from '@/components/GoodCell.vue'
import TabBar from '@/components/TabBar.vue'

import category from '@/mock/category.json'
import goods from '@/mock/goods.json'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    GoodCell,
    TabBar,
  },
  setup() {
    const state = reactive({
      categoryList: category,
      goods: goods,
      searchValue: '',
      active: 0,
    })

    watch(
      () => state.searchValue,
      newValue => {
        console.log('The new search value is: ' + newValue)
      },
    )

    return {
      ...toRefs(state),
    }
  },
})
</script>

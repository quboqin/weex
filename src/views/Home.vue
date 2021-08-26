<template>
  <div class="h-full">
    <home-header>
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
    </home-header>
    <div class="mt-14">
      <van-tabs v-model:active="active" background="#fee2e2">
        <van-tab
          v-for="(category, index) in categoryList"
          :title="category.name"
          :key="index"
        >
          <div>
            {{ category.name }}
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <footer></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from 'vue'

import HomeHeader from '@/components/Header.vue'

import category from '@/mock/category.json'

export default defineComponent({
  name: 'Home',
  components: {
    HomeHeader,
  },
  setup() {
    const state = reactive({
      categoryList: category,
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

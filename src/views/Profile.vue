<template>
  <Header>
    <template #default>
      <div>我的</div>
    </template>
  </Header>
  <div class="mt-14">Profile</div>
  <tab-bar></tab-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'
import TabBar from '@/components/TabBar.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    Header,
    TabBar,
  },
})
</script>

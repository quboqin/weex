<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { checkHealth } from '@/apis/health'

export default defineComponent({
  name: 'App',
  setup() {
    const getUserName = async () => {
      checkHealth({})
    }
    onMounted(getUserName)
  }
})
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fee2e2;
}
</style>

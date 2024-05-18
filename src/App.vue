<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.app-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

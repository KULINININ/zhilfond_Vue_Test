<template>
  <div class="user-layout container mx-auto my-10 space-y-10">
    <div class="user-layout__header flex inline justify-between">
      <div class="user-layout__header-logo font-bold text-3xl text-[#E31F24]">Жилфонд</div>
      <div class="user-layout__header-user text-[#6d6d6d]">Пользователь</div>
    </div>
    <div class="user-layout__content">
      <UserEmploeesView />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserEmploeesView from '@/views/UserEmploeesView.vue'
</script>

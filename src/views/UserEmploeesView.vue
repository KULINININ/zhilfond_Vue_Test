<template>
  <div class="employees-view grid grid-cols-3 rounded-lg shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)]">
    <div class="employee-view__search col-span-1 p-4 border-r-2 border-gray-200">
      <SearchCard />
    </div>
    <div class="employee-view__info col-span-2 p-4">
      <UserCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCard from '../components/UserCardFull.vue'
import SearchCard from '../components/SearchCard.vue'
</script>

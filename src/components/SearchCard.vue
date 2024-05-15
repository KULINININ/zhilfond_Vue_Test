<template>
  <div class="search-card bg-[#fdfdfd] space-y-4">
    <div class="search-card__header font-bold text-[#333333]">Поиск сотрудника</div>
    <BaseSearch />
    <div class="search-card__result font-bold text-[#333333]">Результаты</div>
    <UserCardMini v-for="id in 3" :key="id" />
  </div>
</template>

<script setup lang="ts">
import UserCardMini from './UserCardMini.vue'
import BaseSearch from '../base/BaseSearch.vue'
</script>

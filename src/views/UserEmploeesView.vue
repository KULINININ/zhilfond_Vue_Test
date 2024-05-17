<template>
  <div
    class="employees-view grid grid-cols-3 rounded-lg shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)] min-w-[550px] h-full"
  >
    <div
      class="employee-view__search col-span-1 p-4 border-r-2 border-gray-200 bg-[#fdfdfd] min-w-[200px]"
    >
      <SearchCard />
    </div>
    <div class="employee-view__info col-span-2 p-4">
      <div class="employee-view__info__card" v-if="selectedUser && !userDataLoading">
        <UserCardFull :user="selectedUser" />
      </div>
      <div
        class="employee-view__info__card__loading-skeleton flex flex-col items-center relative"
        v-else-if="userDataLoading"
      >
        <UserCardFullSkeleton />
        <div class="employee-view__info__card__loading-loader absolute top-1/2 left-1/2 z-10">
          <LoadingIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

import UserCardFull from '@/components/UserCardFull.vue'
import UserCardFullSkeleton from '@/components/Skeletons/UserCardFullSkeleton.vue'
import LoadingIcon from '@/assets/icons/LoadingIcon.vue'
import SearchCard from '@/components/SearchCard.vue'

const store = useStore()

// const getUsers = () => store.dispatch('getUsers')
// getUsers()

const selectedUser = computed(() => store.getters.selectedUser)
const userDataLoading = computed(() => store.getters.userDataLoading)
</script>

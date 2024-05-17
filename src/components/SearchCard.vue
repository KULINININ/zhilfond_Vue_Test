<template>
  <div class="search-card space-y-4">
    <div class="search-card__header font-bold text-[#333333]">Поиск сотрудника</div>
    <BaseSearch v-model:value="search" />
    <div>{{ search }}</div>
    <div class="search-card__result font-bold text-[#333333]">Результаты</div>
    <div class="search-card__users space-y-4" v-if="!allUsersLoading">
      <UserCardMini
        v-for="user in users"
        :key="user.id"
        :username="user.username"
        :email="user.email"
        :active="user.id === selectedUser?.id"
        @click="doSelectUser(user)"
      />
    </div>
    <div
      class="search-card__users__loading-skeleton space-y-4 flex flex-col items-center relative"
      v-for="i in 3"
      :key="i"
      v-else
    >
      <UserCardMiniSkeleton />
      <div class="search-card__users__loading-loader absolute z-10">
        <LoadingIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCardMini from '@/components/UserCardMini.vue'
import UserCardMiniSkeleton from '@/components/Skeletons/UserCardMiniSkeleton.vue'
import BaseSearch from '@/components/Base/BaseSearch.vue'
import LoadingIcon from '@/assets/icons/LoadingIcon.vue'

import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { debounce } from 'lodash'

import type { User } from '@/types/user.ts'

const debouncedUsersFilter = debounce((searchString) => {
  const ids: number[] = []
  const usernames: string[] = []

  searchString.split(',').forEach((param) => {
    const trimmedParam: string = param.trim()
    if (isNaN(Number(trimmedParam))) {
      usernames.push(trimmedParam)
    } else {
      ids.push(Number(trimmedParam))
    }
  })

  const resultObject = {
    ids: ids,
    usernames: usernames
  }
  // console.log('params', resultObject)
  store.dispatch('getUsersByParams', { ids: ids, usernames: usernames })
}, 500)

const store = useStore()

const search = ref('')

const users = computed(() => store.getters.users)

const selectedUser = computed<User>(() => store.getters.selectedUser)
const allUsersLoading = computed(() => store.getters.allUsersLoading)

const doSelectUser = (user) => {
  store.dispatch('getUsersById', { id: user.id })
}

watch(search, (value) => {
  debouncedUsersFilter(value)
})
</script>

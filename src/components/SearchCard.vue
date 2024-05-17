<template>
  <div class="search-card">
    <div class="search-card__header">Поиск сотрудника</div>
    <BaseSearch class="search-card__input" v-model:value="search" />
    <div class="search-card__result">Результаты</div>
    <div class="search-card__users" v-if="!allUsersLoading">
      <UserCardMini
        v-for="user in users"
        :key="user.id"
        :username="user.username"
        :email="user.email"
        :active="user.id === selectedUser?.id"
        @click="doSelectUser(user)"
      />
    </div>
    <div class="search-card__users__loading-skeleton" v-for="i in 3" :key="i" v-else>
      <UserCardMiniSkeleton />
      <div class="search-card__users__loading-loader">
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

<style scoped lang="scss">
@mixin space-y-4 {
  > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
}

.search-card {
  @include space-y-4;
  min-height: 600px;

  &__header {
    font-weight: 700;
    color: var(--text-primary);
  }

  &__input {
    width: 90%;
  }

  &__result {
    font-weight: 700;
    color: var(--text-primary);
  }

  &__users {
    @include space-y-4;

    &__loading {
      &-skeleton {
        // @include space-y-4;

        align-items: center;
        flex-direction: column;
        display: flex;
        position: relative;
      }

      &-loader {
        position: absolute;
        z-index: 10;
      }
    }
  }
}
</style>

<template>
  <div class="employees-view">
    <div class="employees-view__search">
      <SearchCard />
    </div>
    <div class="employees-view__info">
      <div class="employees-view__info__card" v-if="selectedUser && !userDataLoading">
        <UserCardFull :user="selectedUser" />
      </div>
      <div class="employees-view__info__card__loading-skeleton" v-else-if="userDataLoading">
        <UserCardFullSkeleton />
        <div class="employees-view__info__card__loading-loader">
          <LoadingIcon />
        </div>
      </div>
      <div class="employees-view__no-user" v-else>
        Выберите сотрудника, чтобы посмотреть его профиль
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

import type { User } from '@/types/user.ts'

const store = useStore()

// const getUsers = () => store.dispatch('getUsers')
// getUsers()

const selectedUser = computed<User>(() => store.getters.selectedUser)
const userDataLoading = computed(() => store.getters.userDataLoading)
</script>

<style scoped lang="scss">
.employees-view {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  min-width: 550px;
  height: 100%;
  display: grid;

  &__search {
    padding: 1rem;
    border-right-width: 2px;
    min-width: 200px;
    grid-column: span 1 / span 1;
    border-color: rgb(229 231 235);
    background-color: var(--background-primary);
  }

  &__info {
    grid-column: span 2 / span 2;
    padding: 1rem;

    &__card {
      &__loading-skeleton {
        align-items: center;
        flex-direction: column;
        display: flex;
        position: relative;
      }
      &__loading-loader {
        z-index: 10;
        top: 50%;
        left: 50%;
        position: absolute;
      }
    }
  }

  &__no-user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: 700;
  }
}
</style>

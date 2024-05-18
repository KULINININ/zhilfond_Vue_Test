import { createStore, Store } from 'vuex'

import { fetchUsersByPage, fetchUsersById, fetchUsersByParams } from '@/api/api'
import { User } from '@/types/user'

import { createToaster } from '@meforma/vue-toaster'

const toaster = createToaster({})

interface RootState {
  users: User[]
  selectedUser?: User
  allUsersLoading: boolean
  userDataLoading: boolean
}

const store = createStore<RootState>({
  state() {
    return {
      users: [],
      selectedUser: undefined,
      allUsersLoading: false,
      userDataLoading: false
    }
  },
  getters: {
    users: (state: RootState) => state.users,
    selectedUser: (state: RootState) => state.selectedUser,
    allUsersLoading: (state: RootState) => state.allUsersLoading,
    userDataLoading: (state: RootState) => state.userDataLoading
  },
  mutations: {},
  actions: {
    async getUsers(): Promise<void> {
      let page: number = 1
      this.state.allUsersLoading = true
      let validResponse: boolean = true

      while (validResponse) {
        const fetchedUsers: User[] = await fetchUsersByPage(page)
        if (fetchedUsers.length > 0) {
          this.state.users.push(...fetchedUsers)
          page++
          this.state.allUsersLoading = false
          // console.log(this.state.users)
        } else {
          validResponse = false
        }
      }
    },
    async getUsersByParams(
      context: any,
      payload: { ids: number[]; usernames: string[] }
    ): Promise<void> {
      this.state.selectedUser = undefined

      let page: number = 1
      this.state.allUsersLoading = true
      let validResponse: boolean = true
      this.state.users = []

      let params = ''

      // Если есть usernames, то поиск будет по ним, если нет, то по ids
      if (payload.usernames.length > 0) {
        params = '&username=' + payload.usernames.join('&username=')
      } else {
        params = '&id=' + payload.ids.join('&id=')
      }

      try {
        while (validResponse) {
          const fetchedUsers: User[] = await fetchUsersByParams(params, page)
          if (fetchedUsers.length > 0) {
            this.state.users.push(...fetchedUsers)
            page++
            this.state.allUsersLoading = false
          } else {
            validResponse = false
            this.state.allUsersLoading = false
          }
        }
      } catch (exception) {
        toaster.error('Error while fetching users')
        console.log(exception)
        this.state.allUsersLoading = false
      }
      console.log(this.state.users)
    },
    async getUsersById(context: any, payload: { id: number }): Promise<void> {
      this.state.userDataLoading = true

      try {
        const fetchedUser: User = await fetchUsersById(payload.id)
        this.state.selectedUser = fetchedUser
      } catch (exception) {
        toaster.error('Error while fetching user data')
        console.log(exception)
      }

      this.state.userDataLoading = false
    }
  }
})

export default store as Store<RootState>

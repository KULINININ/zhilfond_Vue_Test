import { createStore, Store } from 'vuex'

import { fetchUsersByPage, fetchUsersById, fetchUsersByParams } from '@/api/api'
import { User } from '@/types/user'

interface RootState {
  users: User[]
  selectedUser: User
  allUsersLoading: boolean
  userDataLoading: boolean
}

const store = createStore<RootState>({
  state() {
    return {
      users: [] as User[],
      selectedUser: undefined as User,
      allUsersLoading: false as boolean,
      userDataLoading: false as boolean
    }
  },
  getters: {
    users: (state: RootState) => state.users as User[],
    selectedUser: (state: RootState) => state.selectedUser as User,
    allUsersLoading: (state: RootState) => state.allUsersLoading as boolean,
    userDataLoading: (state: RootState) => state.userDataLoading as boolean
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

      const idsString: string = payload.ids.join('&id=')
      const usernamesString: string = payload.usernames.join('&username=')

      while (validResponse) {
        const fetchedUsers: User[] = await fetchUsersByParams(
          { ids: '&id=' + idsString, usernames: '&id=' + usernamesString },
          page
        )
        if (fetchedUsers.length > 0) {
          this.state.users.push(...fetchedUsers)
          page++
          this.state.allUsersLoading = false
        } else {
          validResponse = false
          this.state.allUsersLoading = false
        }
      }
      console.log(this.state.users)
    },
    async getUsersById(context: any, payload: { id: number }): Promise<void> {
      this.state.userDataLoading = true
      const fetchedUser: User = await fetchUsersById(payload.id)
      this.state.selectedUser = fetchedUser
      this.state.userDataLoading = false
    }
  }
})

export default store as Store<RootState>

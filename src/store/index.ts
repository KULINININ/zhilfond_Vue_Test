import { createStore, Store } from 'vuex'

import { fetchUsersByPage, fetchUsersById, fetchUsersByParams } from '../api/api.ts'
import { User } from '@types/user.ts'

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
      selctedUser: {} as User,
      allUsersLoading: false as boolean,
      userDataLoading: false as boolean
    }
  },
  getters: {
    users: (state: RootState) => state.users,
    selectedUser: (state: RootState) => state.selectedUser,
    allUsersLoading: (state: RootState) => state.allUsersLoading,
    userDataLoading: (state: RootState) => state.userDataLoading
  },
  mutations: {
    // setSelectedUser(state: RootState, user: User) {
    //   state.selectedUser = user
    // }
  },
  actions: {
    async getUsers() {
      let page: number = 1
      this.state.allUsersLoading = true
      let validResponse = true
      while (validResponse) {
        const fetchedUsers: User[] = await fetchUsersByPage(page)
        if (fetchedUsers.length > 0) {
          this.state.users.push(...fetchedUsers)
          page++
          this.state.allUsersLoading = false
          console.log(this.state.users)
        } else {
          validResponse = false
        }
      }
    },
    async getUsersByParams(filterParams: object) {
      console.log('getUsersByParams', filterParams)
      // let page: number = 1
      // this.state.loading = true
      // this.state.users = []
      // while (this.state.loading) {
      //   const fetchedUsers: User[] = await fetchUsersByParams(params, page)
      //   if (fetchedUsers.length > 0) {
      //     this.state.users.push(...fetchedUsers)
      //     page++
      //     console.log(this.state.users)
      //   } else {
      //     break
      //   }
      // }
      // this.state.loading = false
      // this.state.loading = true
      // const fetchedUsers: User[] = await fetchUsersByParams(params)
      // if (fetchedUsers.length > 0) {
      //   this.state.users = fetchedUsers
      // }
      // this.state.loading = false
    },
    async getUsersById(context: any, payload: { id: number }) {
      this.state.userDataLoading = true
      const fetchedUser: User = await fetchUsersById(payload.id)
      this.state.selectedUser = fetchedUser
      this.state.userDataLoading = false
    }
  }
})

export default store as Store<RootState>

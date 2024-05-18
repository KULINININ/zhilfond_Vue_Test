import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/search'
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@layouts/UserLayout.vue'),
    children: [
      {
        path: '/search/user/:id',
        name: 'user',
        props: true,
        component: () => import('@components/UserCardFull.vue')
      }
    ]
  }
]

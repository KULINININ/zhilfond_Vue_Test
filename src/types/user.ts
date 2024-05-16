import { Company } from '@/types/company'

interface Address {
  readonly city: string
  readonly geo: {
    lat: number
    lng: number
  }
  readonly street: string
  readonly suite: string
  readonly zipcode: string
}

export interface User {
  readonly id: number
  readonly address: Address
  readonly company: Company
  readonly email: string
  readonly name: string
  readonly phone: string
  readonly username: string
  readonly website: string
}

import { Gym } from '@prisma/client'

export interface ICreateGymUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

export interface ICreateGymUseCaseResponse {
  gym: Gym
}

export interface ISearchGymUseCaseRequest {
  query: string
  page: number
}

export interface ISearchGymUseCaseResponse {
  gyms: Gym[]
}

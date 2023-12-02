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

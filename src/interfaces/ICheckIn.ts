import { CheckIn } from '@prisma/client'

export interface ICheckInRequest {
  userId: string
  gymId: string
  userLatitude: number
  userLongitude: number
}

export interface ICheckInResponse {
  checkIn: CheckIn
}

export interface IFetchUserCheckInsHistoryUseCaseRequest {
  userId: string
}

export interface IFetchUserCheckInsHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

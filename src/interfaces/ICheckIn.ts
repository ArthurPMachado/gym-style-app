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
  page: number
}

export interface IFetchUserCheckInsHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export interface IGetUserMetricsUseCaseRequest {
  userId: string
}

export interface IGetUserMetricsUseCaseResponse {
  checkInsCount: number
}

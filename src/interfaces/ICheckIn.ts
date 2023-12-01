import { CheckIn } from '@prisma/client'

export interface ICheckInRequest {
  userId: string
  gymId: string
}

export interface ICheckInResponse {
  checkIn: CheckIn
}

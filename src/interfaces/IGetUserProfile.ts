import { User } from '@prisma/client'

export interface IGetUserProfileRequest {
  userId: string
}

export interface IGetUserProfileResponse {
  user: User
}

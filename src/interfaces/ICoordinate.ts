import { Gym } from '@prisma/client'

export interface ICoordinate {
  latitude: number
  longitude: number
}

export interface IFetchNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

export interface IFetchNearbyGymsUseCaseResponse {
  gyms: Gym[]
}

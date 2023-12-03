import {
  IFetchNearbyGymsUseCaseRequest,
  IFetchNearbyGymsUseCaseResponse,
} from '@/interfaces/ICoordinate'
import { IGymsRepository } from '@/interfaces/IGymRepository'

export class FetchNearbyGymsUseCase {
  constructor(private gymRepository: IGymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: IFetchNearbyGymsUseCaseRequest): Promise<IFetchNearbyGymsUseCaseResponse> {
    const gyms = await this.gymRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      gyms,
    }
  }
}

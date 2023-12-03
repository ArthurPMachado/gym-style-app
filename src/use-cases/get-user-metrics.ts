import { ICheckInsRepository } from '@/interfaces/ICheckinRepository'
import {
  IGetUserMetricsUseCaseRequest,
  IGetUserMetricsUseCaseResponse,
} from '@/interfaces/ICheckIn'

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    userId,
  }: IGetUserMetricsUseCaseRequest): Promise<IGetUserMetricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}

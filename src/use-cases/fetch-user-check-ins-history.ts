import { ICheckInsRepository } from '@/interfaces/ICheckinRepository'
import {
  IFetchUserCheckInsHistoryUseCaseRequest,
  IFetchUserCheckInsHistoryUseCaseResponse,
} from '@/interfaces/ICheckIn'

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    userId,
  }: IFetchUserCheckInsHistoryUseCaseRequest): Promise<IFetchUserCheckInsHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(userId)

    return {
      checkIns,
    }
  }
}

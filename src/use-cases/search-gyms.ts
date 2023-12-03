import {
  ISearchGymUseCaseRequest,
  ISearchGymUseCaseResponse,
} from '@/interfaces/IGym'
import { IGymsRepository } from '@/interfaces/IGymRepository'

export class SearchGymsUseCase {
  constructor(private gymRepository: IGymsRepository) {}

  async execute({
    query,
    page,
  }: ISearchGymUseCaseRequest): Promise<ISearchGymUseCaseResponse> {
    const gyms = await this.gymRepository.searchManyByQuery(query, page)

    return {
      gyms,
    }
  }
}

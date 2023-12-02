import {
  ICreateGymUseCaseRequest,
  ICreateGymUseCaseResponse,
} from '@/interfaces/IGym'
import { IGymsRepository } from '@/interfaces/IGymRepository'

export class GymUseCase {
  constructor(private gymRepository: IGymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: ICreateGymUseCaseRequest): Promise<ICreateGymUseCaseResponse> {
    const gym = await this.gymRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return {
      gym,
    }
  }
}

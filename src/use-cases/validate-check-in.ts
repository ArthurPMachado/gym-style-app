import { ICheckInsRepository } from '@/interfaces/ICheckinRepository'
import {
  IValidateCheckInRequest,
  IValidateCheckInResponse,
} from '@/interfaces/ICheckIn'
import { ResourceNotFound } from '@/errors/use-cases/resource-not-found-error'

export class ValidateCheckInUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    checkInId,
  }: IValidateCheckInRequest): Promise<IValidateCheckInResponse> {
    const checkIn = await this.checkInsRepository.findById(checkInId)

    if (!checkIn) {
      throw new ResourceNotFound()
    }

    checkIn.validated_at = new Date()

    await this.checkInsRepository.save(checkIn)

    return {
      checkIn,
    }
  }
}

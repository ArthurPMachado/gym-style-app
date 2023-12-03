import { ICheckInsRepository } from '@/interfaces/ICheckinRepository'
import {
  IValidateCheckInRequest,
  IValidateCheckInResponse,
} from '@/interfaces/ICheckIn'
import { ResourceNotFound } from '@/errors/use-cases/resource-not-found-error'
import dayjs from 'dayjs'
import { LateCheckInValidationError } from '@/errors/use-cases/late-check-in-validation-error'

export class ValidateCheckInUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    checkInId,
  }: IValidateCheckInRequest): Promise<IValidateCheckInResponse> {
    const checkIn = await this.checkInsRepository.findById(checkInId)

    if (!checkIn) {
      throw new ResourceNotFound()
    }

    const distaceInMinutesFromCheckInCreation = dayjs(new Date()).diff(
      checkIn.created_at,
      'minutes',
    )

    if (distaceInMinutesFromCheckInCreation > 20) {
      throw new LateCheckInValidationError()
    }

    checkIn.validated_at = new Date()

    await this.checkInsRepository.save(checkIn)

    return {
      checkIn,
    }
  }
}

import { ICheckInsRepository } from '@/interfaces/ICheckinRepository'
import { ICheckInRequest, ICheckInResponse } from '@/interfaces/ICheckIn'
import { IGymsRepository } from '@/interfaces/IGymRepository'
import { ResourceNotFound } from '@/errors/use-cases/resource-not-found-error'

export class CheckInUseCase {
  constructor(
    private checkInsRepository: ICheckInsRepository,
    private gymsRepository: IGymsRepository,
  ) {}

  async execute({ userId, gymId }: ICheckInRequest): Promise<ICheckInResponse> {
    const gym = await this.gymsRepository.findById(gymId)

    if (!gym) {
      throw new ResourceNotFound()
    }

    // calculate distance between user and gym

    const checkInOnSameDay = await this.checkInsRepository.findByUserIdOnDate(
      userId,
      new Date(),
    )

    if (checkInOnSameDay) {
      throw new Error()
    }

    const checkIn = await this.checkInsRepository.create({
      user_id: userId,
      gym_id: gymId,
    })

    return {
      checkIn,
    }
  }
}

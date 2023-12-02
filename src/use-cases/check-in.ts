import { ICheckInsRepository } from '@/interfaces/ICheckinRepository'
import { ICheckInRequest, ICheckInResponse } from '@/interfaces/ICheckIn'

export class CheckInUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({ userId, gymId }: ICheckInRequest): Promise<ICheckInResponse> {
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

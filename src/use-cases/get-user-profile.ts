import { IUsersRepository } from '@/interfaces/IUsersRepository'
import {
  IGetUserProfileRequest,
  IGetUserProfileResponse,
} from '@/interfaces/IGetUserProfile'
import { ResourceNotFound } from '@/errors/use-cases/resource-not-found-error'

export class GetUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    userId,
  }: IGetUserProfileRequest): Promise<IGetUserProfileResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFound()
    }

    return {
      user,
    }
  }
}

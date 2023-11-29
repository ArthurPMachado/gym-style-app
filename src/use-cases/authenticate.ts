import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '@/errors/use-cases/invalid-credentials-error'
import {
  IAuthenticateUseCaseRequest,
  IAuthenticateUseCaseResponse,
} from '@/interfaces/IAuthenticate'
import { IUsersRepository } from '@/interfaces/IUsersRepository'

export class AuthenticateUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: IAuthenticateUseCaseRequest): Promise<IAuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}

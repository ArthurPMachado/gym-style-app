import { UserAlreadyExistsError } from '@/errors/use-cases/user-already-exists-error'
import {
  IRegisterUseCaseRequest,
  IRegisterUseCaseResponse,
} from '@/interfaces/IRegisterUserCase'
import { IUsersRepository } from '@/interfaces/IUsersRepository'
import { hash } from 'bcryptjs'

export class RegisterUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: IRegisterUseCaseRequest): Promise<IRegisterUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return {
      user,
    }
  }
}

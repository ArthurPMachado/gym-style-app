import { FastifyRequest, FastifyReply } from 'fastify'
import { registerBodySchema } from '@/schemas/register-body-schema'
import { RegisterUseCase } from '@/use-cases/register'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/errors/use-cases/user-already-exists-error'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerUserCase = new RegisterUseCase(usersRepository)

    await registerUserCase.execute({
      name,
      email,
      password,
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    return reply.status(500).send() // TODO: fix me
  }

  return reply.status(201).send()
}

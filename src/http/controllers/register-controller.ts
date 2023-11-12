import { FastifyRequest, FastifyReply } from 'fastify'
import { registerBodySchema } from '@/schemas/register-body-schema'
import { registerUserCase } from '@/use-cases/register'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    await registerUserCase({
      name,
      email,
      password,
    })
  } catch (error) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}

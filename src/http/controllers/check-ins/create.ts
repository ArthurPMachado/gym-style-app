import { FastifyRequest, FastifyReply } from 'fastify'
import { createCheckInBodySchema } from '@/schemas/create-check-in-body-schema'
import { makeCheckInUseCase } from '@/use-cases/factories/make-check-in-use-case'
import { createCheckInParamsSchema } from '@/schemas/create-check-in-params-schema'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { gymId } = createCheckInParamsSchema.parse(request.params)

  const { latitude, longitude } = createCheckInBodySchema.parse(request.body)

  const createCheckInUseCase = makeCheckInUseCase()

  await createCheckInUseCase.execute({
    gymId,
    userId: request.user.sub,
    userLatitude: latitude,
    userLongitude: longitude,
  })

  return reply.status(201).send()
}

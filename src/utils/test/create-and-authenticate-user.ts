import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateUser(
  app: FastifyInstance,
  isAdmin = false,
) {
  await prisma.user.create({
    data: {
      name: 'test',
      email: 'testmail@example.com',
      password_hash: await hash('123456', 6),
      role: isAdmin ? 'ADMIN' : 'MEMBER',
    },
  })

  await request(app.server).post('/users').send({})

  const authResponse = await request(app.server).post('/sessions').send({
    email: 'testmail@example.com',
    password: '123456',
  })

  const { token } = authResponse.body

  return { token }
}

import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Fetch Nearby Gyms (e2e)', async () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to list nearby gyms.', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Yeah Buddy Gym',
        description: 'Description test.',
        phone: '1187654321',
        latitude: -29.5371191,
        longitude: -49.563328,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Light weight Gym',
        description: 'Description test.',
        phone: '1187654321',
        latitude: -29.0371191,
        longitude: -49.363328,
      })

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: -29.5371291,
        longitude: -49.563328,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'Yeah Buddy Gym',
      }),
    ])
  })
})

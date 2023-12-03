import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gym-repository'
import { FetchNearbyGymsUseCase } from '@/use-cases/fetch-nearby-gyms'

// sut -> Sistem Under Test

let gymRepository: InMemoryGymRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymRepository()
    sut = new FetchNearbyGymsUseCase(gymRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -29.5371191,
      longitude: -49.563328,
    })

    await gymRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -29.3371191,
      longitude: -49.363328,
    })

    const { gyms } = await sut.execute({
      userLatitude: -29.5371191,
      userLongitude: -49.563328,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})

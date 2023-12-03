import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gym-repository'
import { SearchGymsUseCase } from '@/use-cases/search-gyms'

// sut -> Sistem Under Test

let gymRepository: InMemoryGymRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymRepository()
    sut = new SearchGymsUseCase(gymRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymRepository.create({
      title: 'Gym yeah buddy',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    await gymRepository.create({
      title: 'Gym light weight',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    const { gyms } = await sut.execute({
      query: 'Gym yeah buddy',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Gym yeah buddy' })])
  })

  it('should be able to fetch paginated gym search', async () => {
    for (let gymInteration = 1; gymInteration <= 22; gymInteration++) {
      await gymRepository.create({
        title: `Gym yeah buddy ${gymInteration}`,
        description: null,
        phone: null,
        latitude: 0,
        longitude: 0,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Gym yeah buddy',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ gym_id: 'Gym yeah buddy 21' }),
      expect.objectContaining({ gym_id: 'Gym yeah buddy 22' }),
    ])
  })
})

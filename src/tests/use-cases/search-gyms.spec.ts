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
    for (let i = 1; i <= 22; i++) {
      await gymRepository.create({
        title: `JavaScript Gym ${i}`,
        description: null,
        phone: null,
        latitude: -27.2092052,
        longitude: -49.6401091,
      })
    }

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gym 21' }),
      expect.objectContaining({ title: 'JavaScript Gym 22' }),
    ])
  })
})

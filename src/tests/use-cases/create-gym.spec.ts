import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gym-repository'
import { GymUseCase } from '@/use-cases/create-gym'
import { beforeEach, describe, expect, it } from 'vitest'

// sut -> Sistem Under Test

let gymRepository: InMemoryGymRepository
let sut: GymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymRepository = new InMemoryGymRepository()
    sut = new GymUseCase(gymRepository)
  })

  it('should be able to create a gym', async () => {
    const { gym } = await sut.execute({
      title: 'Gym yeah buddy',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})

import { z } from 'zod'

export const createCheckInParamsSchema = z.object({
  gymId: z.string().uuid(),
})

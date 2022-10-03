import * as zod from 'zod'
import { newCicleFormValidationSchema } from './newCicleFormValidationSchema'

export type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}

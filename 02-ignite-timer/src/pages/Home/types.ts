import * as zod from 'zod'
import { newCicleFormValidationSchema } from './newCicleFormValidationSchema'

export type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>

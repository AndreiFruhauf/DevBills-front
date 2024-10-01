import { z } from 'zod'

import {
    createCategorySchema,
    createTransactionSchema,
    financialEvolutionFilterSchema,
    transactionFilterSchema
} from './schemas'

export type CreateCategoryData = z.infer<typeof createCategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionSchema>

export type TransactionsFilterData = z.infer<typeof transactionFilterSchema>

export type FinancialEvolutionFilterData = z.infer<typeof financialEvolutionFilterSchema>

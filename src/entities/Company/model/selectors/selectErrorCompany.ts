import { type StateSchema } from 'app/providers/StoreProvider'

export const selectErrorCompany = (state: StateSchema) => state.companies?.error

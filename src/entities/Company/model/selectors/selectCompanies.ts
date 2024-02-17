import { type StateSchema } from 'app/providers/StoreProvider'

export const selectCompanies = (state: StateSchema) => state.companies.companies

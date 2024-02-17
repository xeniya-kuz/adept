import { type StateSchema } from 'app/providers/StoreProvider'

export const selectSelectedCompanyIds = (state: StateSchema) => state.companies.selectedCompanyIds

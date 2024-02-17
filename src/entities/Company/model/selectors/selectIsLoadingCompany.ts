import { type StateSchema } from 'app/providers/StoreProvider'

export const selectIsLoadingCompany = (state: StateSchema) => state.companies?.isLoading

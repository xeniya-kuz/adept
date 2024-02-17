import { type StateSchema } from 'app/providers/StoreProvider'

export const selectIsLoadingEmployee = (state: StateSchema) => state.employees?.isLoading

import { type StateSchema } from 'app/providers/StoreProvider'

export const selectErrorEmployee = (state: StateSchema) => state.employees?.error

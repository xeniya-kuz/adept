import { type StateSchema } from 'app/providers/StoreProvider'

export const selectCurrentEmployees = (state: StateSchema) => state.employees?.currentEmployees

import { type StateSchema } from 'app/providers/StoreProvider'

export const selectAllEmployees = (state: StateSchema) => state.employees?.allEmployees

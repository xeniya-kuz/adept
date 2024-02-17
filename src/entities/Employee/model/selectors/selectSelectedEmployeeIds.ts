import { type StateSchema } from 'app/providers/StoreProvider'

export const selectSelectedEmployeeIds = (state: StateSchema) => state.employees?.selectedEmployeeIds

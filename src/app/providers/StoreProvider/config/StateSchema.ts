import { type EnhancedStore, type Reducer, type ReducersMapObject, type UnknownAction } from '@reduxjs/toolkit'
import { type CompanySchema } from 'entities/Company'
import { type EmployeeSchema } from 'entities/Employee'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
  companies: CompanySchema

  // асинхронный редьюсер
  employees?: EmployeeSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager?: ReducerManager
}

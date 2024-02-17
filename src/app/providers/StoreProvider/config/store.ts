import { type Action, configureStore, type Dispatch, type ReducersMapObject, type AsyncThunkAction } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager, type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { companyReducer } from 'entities/Company'

export function createReduxStore (
  asyncReducers?: ReducersMapObject<StateSchema>
): ReduxStoreWithManager {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    companies: companyReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store: ReduxStoreWithManager = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__
  })

  store.reducerManager = reducerManager

  return store
}

export const store = createReduxStore()

export type AppDispatch = typeof store.dispatch
// export type AppDispatch = Dispatch<any>

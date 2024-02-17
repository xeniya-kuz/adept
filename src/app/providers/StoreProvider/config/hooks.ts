import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from './store'
import { type StateSchema } from './StateSchema'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector

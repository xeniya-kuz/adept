import { type FC, lazy } from 'react'
import { type EmployeeFormProps } from './EmployeeForm'

export const EmployeeFormAsync = lazy<FC<EmployeeFormProps>>(async () => await import('./EmployeeForm'))

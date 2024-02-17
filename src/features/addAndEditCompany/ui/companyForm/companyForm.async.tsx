import { type FC, lazy } from 'react'
import { type CompanyFormProps } from './CompanyForm'

export const CompanyFormAsync = lazy<FC<CompanyFormProps>>(async () => await import('./CompanyForm'))

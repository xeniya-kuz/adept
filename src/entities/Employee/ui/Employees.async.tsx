import { Suspense, lazy } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

const EmployeesAsyncInner = lazy(async () => await import('./Employees'))

export const EmployeesAsync = () => {
  return (
      <Suspense fallback={<Loader/>}>
          <EmployeesAsyncInner/>
      </Suspense>
  )
}

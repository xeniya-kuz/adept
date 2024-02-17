import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { RouteConfig } from '../config/routeConfig'

const AppRouter = (): JSX.Element => {
  return (
      <Suspense fallback={<PageLoader/>}>
          <Routes>
              {Object.values(RouteConfig).map(({ element, path }) => (
                  <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
              ))}
          </Routes>
      </Suspense>
  )
}
export default AppRouter

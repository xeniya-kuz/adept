import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: '*'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
}

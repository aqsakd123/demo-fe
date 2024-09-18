import Auth from '@app/layout/Auth'
import Default from '@app/layout/Default'
import Login from '@app/pages/login/Login'
import E404 from '@app/pages/error/E404'
import Home from '@app/pages/home/Home'
import FormBuilder from '../pages/formBuilderPages/FormBuilderHome'
import { useNavigate } from 'react-router-dom'
import WebSocketComponent from '@app/pages/AwsAndSocketExample/WebSocketComponent'

export type RouteInfo = {
  path: string
  element?: JSX.Element
  layout?: JSX.Element
  roles?: string[]
  children?: RouteInfo[]
}

/**
 * Export constant for paths
 */
export const paths = {
  demoEntityListPath: '/demo-entity',
  demoEntityAddPath: '/demo-entity/add/:id',
  demoEntityEditPath: '/demo-entity/edit/:id',
  demoEntityDetailPath: '/demo-entity/detail/:id',
}

/**
 * Define application routes
 * @returns
 */
export const useInitRoutes = (): RouteInfo[] => {
  const navigate = useNavigate()

  return [
    {
      path: '/login',
      layout: <Auth />,
      children: [
        {
          path: '',
          element: <Login />,
        },
      ],
    },
    {
      path: '/',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: '/form-builder',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '/form-builder',
          element: <FormBuilder />,
        },
      ],
    },
    {
      path: '/demo-example',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '/demo-example',
          element: <WebSocketComponent />,
        },
      ],
    },
    {
      path: '*',
      element: <E404 />,
    },
  ]
}

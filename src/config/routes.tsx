import Auth from '@app/layout/Auth'
import Default from '@app/layout/Default'
import Login from '@app/pages/login/Login'
import E404 from '@app/pages/error/E404'
import Home from '@app/pages/home/Home'
import FormBuilder from '../pages/formBuilderPages/FormBuilderHome'
import { useNavigate } from 'react-router-dom'
import DemoExampleList from '@app/pages/DemoExample/DemoExampleList'
import DemoExampleFormContainer from '@app/pages/DemoExample/Dialog/DemoExampleFormContainer'

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
  demoEntityAddPath: '/demo-entity/add',
  demoEntityEditPath: '/demo-entity/edit/:id',
  demoEntityDetailPath: '/demo-entity/detail/:id',
  demoExampleListPath: '/demo-example',
  demoExampleAddPath: '/demo-example/add',
  demoExampleEditPath: '/demo-example/edit/:id',
  demoExampleDetailPath: '/demo-example/detail/:id',
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
      path: paths.demoExampleListPath,
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: paths.demoExampleListPath,
          element: <DemoExampleList />,
        },
        {
          path: paths.demoExampleDetailPath,
          element: (
            <DemoExampleFormContainer
              mode='view'
              onReturn={() => navigate(paths.demoExampleListPath)}
            />
          ),
        },
        {
          path: paths.demoExampleEditPath,
          element: (
            <DemoExampleFormContainer
              mode='edit'
              onReturn={() => navigate(paths.demoExampleListPath)}
            />
          ),
        },
        {
          path: paths.demoExampleAddPath,
          element: (
            <DemoExampleFormContainer
              mode='add'
              onReturn={() => navigate(paths.demoExampleListPath)}
            />
          ),
        },
      ],
    },
    {
      path: '*',
      element: <E404 />,
    },
  ]
}

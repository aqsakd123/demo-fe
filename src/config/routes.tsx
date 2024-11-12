import Auth from '@app/layout/Auth'
import Default from '@app/layout/Default'
import Login from '@app/pages/login/Login'
import E404 from '@app/pages/error/E404'
import Home from '@app/pages/home/Home'
import FormBuilder from '../pages/formBuilderPages/FormBuilderHome'
import { useNavigate } from 'react-router-dom'
import DemoEntityExampleList from '@app/pages/DemoEntityExample/DemoEntityExampleList'
import DemoEntityExampleFormContainer from '@app/pages/DemoEntityExample/Dialog/DemoEntityExampleFormContainer'
import ChildDemoList from '@app/pages/ChildDemo/ChildDemoList'

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
  childDemoListPath: '/child-demo',
  demoEntityExampleListPath: '/demo-entity-example',
  demoEntityExampleAddPath: '/demo-entity-example/add',
  demoEntityExampleEditPath: '/demo-entity-example/edit/:id',
  demoEntityExampleDetailPath: '/demo-entity-example/detail/:id',
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
      path: paths.demoEntityExampleListPath,
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: paths.demoEntityExampleListPath,
          element: <DemoEntityExampleList />,
        },
        {
          path: paths.demoEntityExampleDetailPath,
          element: (
            <DemoEntityExampleFormContainer
              mode='view'
              onReturn={() => navigate(paths.demoEntityExampleListPath)}
            />
          ),
        },
        {
          path: paths.demoEntityExampleEditPath,
          element: (
            <DemoEntityExampleFormContainer
              mode='edit'
              onReturn={() => navigate(paths.demoEntityExampleListPath)}
            />
          ),
        },
        {
          path: paths.demoEntityExampleAddPath,
          element: (
            <DemoEntityExampleFormContainer
              mode='add'
              onReturn={() => navigate(paths.demoEntityExampleListPath)}
            />
          ),
        },
      ],
    },
    {
      path: paths.childDemoListPath,
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: paths.childDemoListPath,
          element: <ChildDemoList />,
        },
      ],
    },
    {
      path: '*',
      element: <E404 />,
    },
  ]
}

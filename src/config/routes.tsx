import Auth from '@app/layout/Auth'
import Default from '@app/layout/Default'
import Login from '@app/pages/login/Login'
import E404 from '@app/pages/error/E404'
import Home from '@app/pages/home/Home'
import Excel from '@app/pages/excel/Excel'
import FormBuilder from '../pages/formBuilderPages/FormBuilderHome'
import TagManagementList from '@app/pages/TagManagement/TagManagementList'
import S3Manager from '@app/pages/DemoExample/S3Manager'
import { useNavigate } from 'react-router-dom'
import DemoEntityFormDialog from '@app/pages/DemoEntity/Dialog/DemoEntityFormDialog'

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
      path: '/excel',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '/excel',
          element: <Excel />,
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
      path: '/tag-management',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '/tag-management',
          element: <TagManagementList />,
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
          element: <S3Manager />,
        },
      ],
    },
    {
      path: '*',
      element: <E404 />,
    },
  ]
}

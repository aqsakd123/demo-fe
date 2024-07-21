import Auth from '@app/layout/Auth'
import Default from '@app/layout/Default'
import Login from '@app/pages/login/Login'
import E404 from '@app/pages/error/E404'
import Home from '@app/pages/home/Home'
import Excel from '@app/pages/excel/Excel'
import FormBuilder from '../pages/formBuilderPages/FormBuilderHome'
import TagManagementList from '@app/pages/TagManagement/TagManagementList'
import DemoEntityList from '@app/pages/DemoEntity/DemoEntityList'

export type RouteInfo = {
  path: string
  element?: JSX.Element
  layout?: JSX.Element
  roles?: string[]
  children?: RouteInfo[]
}

/**
 * Define application routes
 * @returns
 */
export const initRoutes = (): RouteInfo[] => {
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
      path: '/demo-entity',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '/demo-entity',
          element: <DemoEntityList />,
        },
      ],
    },
    {
      path: '*',
      element: <E404 />,
    },
  ]
}

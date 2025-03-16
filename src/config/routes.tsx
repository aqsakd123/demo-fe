import Auth from '@app/layout/Auth'
import Default from '@app/layout/Default'
import Login from '@app/pages/login/Login'
import E404 from '@app/pages/error/E404'
import Home from '@app/pages/home/Home'
import FormBuilder from '../pages/FormGenerators/Component/FormBuilderHome'
import { useNavigate } from 'react-router-dom'
import MemoList from '@app/pages/memo/MemoList'
import VideoItemList from '@app/pages/videoItem/VideoItemList'
import VideoItemEdit from '@app/pages/videoItem/VideoItemEdit'
import StoryList from '@app/pages/story/StoryItem'
import LayoutForm from '@app/pages/CoGe/LayoutFormList'

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
      path: '/memo',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '',
          element: <MemoList />,
        },
      ],
    },
    {
      path: '/layout-form',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '',
          element: <LayoutForm />,
        },
      ],
    },
    {
      path: '/video',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '',
          element: <VideoItemList />,
        },
      ],
    },
    {
      path: '/video/:id',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '/video/:id',
          element: <VideoItemEdit />,
        },
      ],
    },
    {
      path: '/story',
      layout: <Default />,
      roles: ['any'],
      children: [
        {
          path: '',
          element: <StoryList />,
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
      path: '*',
      element: <E404 />,
    },
  ]
}

import { ChildDemo } from '@app/pages/ChildDemo/ChildDemoList'
import axiosInstance from '../axios'
import {
  GET_LIST_CHILD_DEMO,
  GET_DETAIL_CHILD_DEMO,
  INSERT_CHILD_DEMO,
  UPDATE_CHILD_DEMO,
  DELETE_CHILD_DEMO,
} from './child-demo-type-graphql'
import { BASE_URL } from '../constant'

export const fetchChildDemoList = async () => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_CHILD_DEMO,
  })

  return response.data?.data?.getListChildDemo
}

export const fetchChildDemoDetail = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_DETAIL_CHILD_DEMO,
    variables: {
      id,
    },
  })

  return response.data?.data?.getDetailChildDemo
}

export const insertChildDemo = async (childDemoInput: ChildDemo) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_CHILD_DEMO,
    variables: { childDemo: childDemoInput },
  })

  return response?.data?.data?.insertChildDemo
}

export const updateChildDemo = async (id: string, childDemoInput: ChildDemo) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_CHILD_DEMO,
    variables: { id, childDemo: childDemoInput },
  })

  return response?.data?.data?.updateChildDemo
}

export const deleteChildDemo = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_CHILD_DEMO,
    variables: { id },
  })

  return response?.data?.data?.deleteChildDemo
}

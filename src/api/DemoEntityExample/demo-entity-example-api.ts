import {
  DemoEntityExample,
  DemoEntityExampleSpecification,
} from '@app/pages/DemoEntityExample/DemoEntityExampleList'
import axiosInstance from '../axios'
import {
  GET_LIST_DEMO_ENTITY_EXAMPLE,
  GET_PAGED_DEMO_ENTITY_EXAMPLE,
  GET_DETAIL_DEMO_ENTITY_EXAMPLE,
  INSERT_DEMO_ENTITY_EXAMPLE,
  UPDATE_DEMO_ENTITY_EXAMPLE,
  DELETE_DEMO_ENTITY_EXAMPLE,
} from './demo-entity-example-type-graphql'
import { BASE_URL } from '../constant'
import { PagingRequest } from '../type'

export const fetchDemoEntityExampleList = async (
  specification?: DemoEntityExampleSpecification,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_DEMO_ENTITY_EXAMPLE,
    variables: {
      specification: specification || {},
    },
  })

  return response.data?.data?.getListDemoEntityExample
}

export const fetchDemoEntityExampleDetail = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_DETAIL_DEMO_ENTITY_EXAMPLE,
    variables: {
      id,
    },
  })

  return response.data?.data?.getDetailDemoEntityExample
}

export const fetchDemoEntityExamplePaged = async (
  specification?: DemoEntityExampleSpecification & PagingRequest,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_PAGED_DEMO_ENTITY_EXAMPLE,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getPagedDemoEntityExample
}

export const insertDemoEntityExample = async (demoEntityExampleInput: DemoEntityExample) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_DEMO_ENTITY_EXAMPLE,
    variables: { demoEntityExample: demoEntityExampleInput },
  })

  return response?.data?.data?.insertDemoEntityExample
}

export const updateDemoEntityExample = async (
  id: string,
  demoEntityExampleInput: DemoEntityExample,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_DEMO_ENTITY_EXAMPLE,
    variables: { id, demoEntityExample: demoEntityExampleInput },
  })

  return response?.data?.data?.updateDemoEntityExample
}

export const deleteDemoEntityExample = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_DEMO_ENTITY_EXAMPLE,
    variables: { id },
  })

  return response?.data?.data?.deleteDemoEntityExample
}

export const exportDemoEntityExample = async (body: any) => {
  const response = await axiosInstance.post('/api/demo-entity-example/export', body, {
    responseType: 'blob',
  })
  return response.data
}

export const importDemoEntityExample = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await axiosInstance.post('/api/demo-entity-example/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

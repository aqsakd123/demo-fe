import { DemoEntity, DemoEntitySpecification } from '@app/pages/DemoEntity/DemoEntityList'
import axiosInstance from '../axios'
import {
  GET_LIST_DEMO_ENTITY,
  INSERT_DEMO_ENTITY,
  DELETE_DEMO_ENTITY,
  UPDATE_DEMO_ENTITY,
  GET_DETAIL_DEMO_ENTITY,
} from './demo-entity-type-graphql'
import { BASE_URL } from '../constant'

export const fetchDemoEntityList = async (specification?: DemoEntitySpecification) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_DEMO_ENTITY,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getListDemoEntity
}

export const fetchDemoEntityDetail = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_DETAIL_DEMO_ENTITY,
    variables: {
      id,
    },
  })
  return response.data?.data?.getDetailDemoEntity
}

export const insertDemoEntity = async (demoEntityInput: DemoEntity) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_DEMO_ENTITY,
    variables: { demoEntity: demoEntityInput },
  })

  return response?.data?.data?.insertDemoEntity
}

export const updateDemoEntity = async (id: string, demoEntityInput: DemoEntity) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_DEMO_ENTITY,
    variables: { id, demoEntity: demoEntityInput },
  })

  return response?.data?.data?.updateDemoEntity
}

export const deleteDemoEntity = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_DEMO_ENTITY,
    variables: { id },
  })

  return response?.data?.data?.deleteDemoEntity
}

import {
  CodingFeature,
  CodingFeatureSpecification,
} from '@app/pages/CodeGeneratorManagement/CodingFeature/CodingFeatureList'
import axiosInstance from '../axios'
import {
  GET_LIST_CODING_FEATURES,
  INSERT_CODING_FEATURE,
  DELETE_CODING_FEATURE,
  UPDATE_CODING_FEATURE,
} from './coding-feature-type-graphql'

const BASE_URL = '/graphql'

export const fetchCodingFeatureList = async (specification?: CodingFeatureSpecification) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_CODING_FEATURES,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getListCodingFeature
}

export const insertCodingFeature = async (codingFeatureInput: CodingFeature) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_CODING_FEATURE,
    variables: { codingFeature: codingFeatureInput },
  })

  return response?.data?.data?.insertCodingFeature
}

export const updateCodingFeature = async (id: string, codingFeatureInput: CodingFeature) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_CODING_FEATURE,
    variables: { id, codingFeature: codingFeatureInput },
  })

  return response?.data?.data?.updateCodingFeature
}

export const deleteCodingFeature = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_CODING_FEATURE,
    variables: { id },
  })

  return response?.data?.data?.deleteCodingFeature
}

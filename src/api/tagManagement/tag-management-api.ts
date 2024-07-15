import {
  TagManagement,
  TagManagementSpecification,
} from '@app/pages/TagManagement/TagManagementList'
import axiosInstance from '../axios'
import {
  GET_LIST_TAG_MANAGEMENTS,
  INSERT_TAG_MANAGEMENT,
  DELETE_TAG_MANAGEMENT,
  UPDATE_TAG_MANAGEMENT,
} from './tag-management-type-graphql'

const BASE_URL = '/graphql'

export const fetchTagManagementList = async (specification?: TagManagementSpecification) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_TAG_MANAGEMENTS,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getListTagManagement
}

export const insertTagManagement = async (tagManagementInput: TagManagement) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_TAG_MANAGEMENT,
    variables: { tagManagement: tagManagementInput },
  })

  return response?.data?.data?.insertTagManagement
}

export const updateTagManagement = async (id: string, tagManagementInput: TagManagement) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_TAG_MANAGEMENT,
    variables: { id, tagManagement: tagManagementInput },
  })

  return response?.data?.data?.updateTagManagement
}

export const deleteTagManagement = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_TAG_MANAGEMENT,
    variables: { id },
  })

  return response?.data?.data?.deleteTagManagement
}

import {
  CodeCommonManagement,
  CodeCommonManagementSpecification,
} from '@app/pages/CodeGeneratorManagement/CodeCommonManagement/CodeCommonManagementList'
import axiosInstance from '../axios'
import {
  GET_LIST_CODE_COMMON_MANAGEMENTS,
  INSERT_CODE_COMMON_MANAGEMENT,
  DELETE_CODE_COMMON_MANAGEMENT,
  UPDATE_CODE_COMMON_MANAGEMENT,
} from './code-common-management-type-graphql'

const BASE_URL = '/graphql'

export const fetchCodeCommonManagementList = async (
  specification?: CodeCommonManagementSpecification,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_CODE_COMMON_MANAGEMENTS,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getListCodeCommonManagement
}

export const insertCodeCommonManagement = async (
  codeCommonManagementInput: CodeCommonManagement,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_CODE_COMMON_MANAGEMENT,
    variables: { codeCommonManagement: codeCommonManagementInput },
  })

  return response?.data?.data?.insertCodeCommonManagement
}

export const updateCodeCommonManagement = async (
  id: string,
  codeCommonManagementInput: CodeCommonManagement,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_CODE_COMMON_MANAGEMENT,
    variables: { id, codeCommonManagement: codeCommonManagementInput },
  })

  return response?.data?.data?.updateCodeCommonManagement
}

export const deleteCodeCommonManagement = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_CODE_COMMON_MANAGEMENT,
    variables: { id },
  })

  return response?.data?.data?.deleteCodeCommonManagement
}

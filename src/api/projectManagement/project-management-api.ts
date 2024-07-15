import {
  ProjectManagement,
  ProjectManagementSpecification,
} from '@app/pages/CodeGeneratorManagement/ProjectManagement/ProjectManagementList'
import axiosInstance from '../axios'
import {
  GET_LIST_PROJECT_MANAGEMENTS,
  INSERT_PROJECT_MANAGEMENT,
  DELETE_PROJECT_MANAGEMENT,
  UPDATE_PROJECT_MANAGEMENT,
} from './project-management-type-graphql'

const BASE_URL = '/graphql'

export const fetchProjectManagementList = async (
  specification?: ProjectManagementSpecification,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_PROJECT_MANAGEMENTS,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getListProjectManagement
}

export const insertProjectManagement = async (projectManagementInput: ProjectManagement) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_PROJECT_MANAGEMENT,
    variables: { projectManagement: projectManagementInput },
  })

  return response?.data?.data?.insertProjectManagement
}

export const updateProjectManagement = async (
  id: string,
  projectManagementInput: ProjectManagement,
) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_PROJECT_MANAGEMENT,
    variables: { id, projectManagement: projectManagementInput },
  })

  return response?.data?.data?.updateProjectManagement
}

export const deleteProjectManagement = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_PROJECT_MANAGEMENT,
    variables: { id },
  })

  return response?.data?.data?.deleteProjectManagement
}

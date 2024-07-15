import {
  CodingFile,
  CodingFileSpecification,
} from '@app/pages/CodeGeneratorManagement/CodingFile/CodingFileList'
import axiosInstance from '../axios'
import {
  GET_LIST_CODING_FILES,
  INSERT_CODING_FILE,
  DELETE_CODING_FILE,
  UPDATE_CODING_FILE,
} from './coding-file-type-graphql'

const BASE_URL = '/graphql'

export const fetchCodingFileList = async (specification?: CodingFileSpecification) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: GET_LIST_CODING_FILES,
    variables: {
      specification: specification || {},
    },
  })
  return response.data?.data?.getListCodingFile
}

export const insertCodingFile = async (codingFileInput: CodingFile) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: INSERT_CODING_FILE,
    variables: { codingFile: codingFileInput },
  })

  return response?.data?.data?.insertCodingFile
}

export const updateCodingFile = async (id: string, codingFileInput: CodingFile) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: UPDATE_CODING_FILE,
    variables: { id, codingFile: codingFileInput },
  })

  return response?.data?.data?.updateCodingFile
}

export const deleteCodingFile = async (id: string) => {
  const response = await axiosInstance.post(BASE_URL, {
    query: DELETE_CODING_FILE,
    variables: { id },
  })

  return response?.data?.data?.deleteCodingFile
}

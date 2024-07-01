import { SubTaskInput, SubTaskSpecification } from '@app/pages/SubTask/SubTaskList'
import axiosInstance from '../axios'
import { GET_LIST_SUB_TASKS, INSERT_SUB_TASK, DELETE_SUB_TASK, UPDATE_SUB_TASK } from './sub-task-type-graphql'

const BASE_URL = '/graphql'

export const fetchSubTaskList = async ( specification?: SubTaskSpecification) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: GET_LIST_SUB_TASKS,
        variables: {
            specification: specification || {},
        },
    })
    return response.data?.data?.getListSubTask
}

export const insertSubTask = async (subTaskInput: SubTaskInput) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: INSERT_SUB_TASK,
        variables: { subTask: subTaskInput },
    })

    return response?.data?.data?.insertSubTask
}

export const updateSubTask = async (id: string, subTaskInput: SubTaskInput) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: UPDATE_SUB_TASK,
        variables: { id, subTask: subTaskInput },
    })

    return response?.data?.data?.updateSubTask
}

export const deleteSubTask = async (id: string) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: DELETE_SUB_TASK,
        variables: { id },
    })

    return response?.data?.data?.deleteSubTask
}
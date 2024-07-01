import { TaskChecklistInput } from '@app/pages/TaskChecklistManagement/TaskChecklistList'
import axiosInstance from '../axios'
import { GET_LIST_TASK_CHECKLISTS, INSERT_TASK_CHECKLIST, DELETE_TASK_CHECKLIST, UPDATE_TASK_CHECKLIST } from './task-checklist-type-graphql'

const BASE_URL = '/graphql'

export const fetchTaskChecklistList = async ( ) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: GET_LIST_TASK_CHECKLISTS,
        
    })
    return response.data?.data?.getListTaskChecklist
}

export const insertTaskChecklist = async (taskChecklistInput: TaskChecklistInput) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: INSERT_TASK_CHECKLIST,
        variables: { taskChecklist: taskChecklistInput },
    })

    return response?.data?.data?.insertTaskChecklist
}

export const updateTaskChecklist = async (id: string, taskChecklistInput: TaskChecklistInput) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: UPDATE_TASK_CHECKLIST,
        variables: { id, taskChecklist: taskChecklistInput },
    })

    return response?.data?.data?.updateTaskChecklist
}

export const deleteTaskChecklist = async (id: string) => {
    const response = await axiosInstance.post(BASE_URL, {
        query: DELETE_TASK_CHECKLIST,
        variables: { id },
    })

    return response?.data?.data?.deleteTaskChecklist
}
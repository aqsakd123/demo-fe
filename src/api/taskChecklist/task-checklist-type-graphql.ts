export const GET_LIST_TASK_CHECKLISTS = `
query getListTaskChecklist{
    getListTaskChecklist{ 
        id, 
        name, 
        description, 
        icon, 
        color, 
        priority, 
        startDate, 
        endDate, 
        estimateHour, 
        
    }
}
`

export const INSERT_TASK_CHECKLIST = `
mutation insertTaskChecklist($taskChecklist: TaskChecklistInput) {
    insertTaskChecklist(taskChecklist: $taskChecklist)
}
`

export const UPDATE_TASK_CHECKLIST = `
mutation updateTaskChecklist($id: ID!, $taskChecklist: TaskChecklistInput) {
    updateTaskChecklist(id: $id, taskChecklist: $taskChecklist)
}
`

export const DELETE_TASK_CHECKLIST = `
mutation deleteTaskChecklist($id: ID!) {
    deleteTaskChecklist(id: $id)
}
`
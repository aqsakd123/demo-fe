export const GET_LIST_SUB_TASKS = `
query getListSubTask($specification: SubTaskSpecificationInput){
    getListSubTask(specification: $specification){ 
        id, 
        name, 
        description, 
        startDate, 
        endDate, 
        estimateHour, 
        displayOrder
    }
}
`

export const INSERT_SUB_TASK = `
mutation insertSubTask($subTask: SubTaskInput) {
    insertSubTask(subTask: $subTask)
}
`

export const UPDATE_SUB_TASK = `
mutation updateSubTask($id: ID!, $subTask: SubTaskInput) {
    updateSubTask(id: $id, subTask: $subTask)
}
`

export const DELETE_SUB_TASK = `
mutation deleteSubTask($id: ID!) {
    deleteSubTask(id: $id)
}
`
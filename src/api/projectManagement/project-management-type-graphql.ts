export const GET_LIST_PROJECT_MANAGEMENTS = `
query getListProjectManagement($specification: ProjectManagementSpecificationInput){
    getListProjectManagement(specification: $specification){ 
        id, 
        name, 
        description, 
        color, 
        frontendLanguage, 
        templateFrontendUsed, 
        backendLanguage, 
        templateBackendUsed
    }
}
`

export const INSERT_PROJECT_MANAGEMENT = `
mutation insertProjectManagement($projectManagement: ProjectManagementInput) {
    insertProjectManagement(projectManagement: $projectManagement)
}
`

export const UPDATE_PROJECT_MANAGEMENT = `
mutation updateProjectManagement($id: ID!, $projectManagement: ProjectManagementInput) {
    updateProjectManagement(id: $id, projectManagement: $projectManagement)
}
`

export const DELETE_PROJECT_MANAGEMENT = `
mutation deleteProjectManagement($id: ID!) {
    deleteProjectManagement(id: $id)
}
`

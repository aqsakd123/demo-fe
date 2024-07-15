export const GET_LIST_CODE_COMMON_MANAGEMENTS = `
query getListCodeCommonManagement($specification: CodeCommonManagementSpecificationInput){
    getListCodeCommonManagement(specification: $specification){ 
        id, 
        name, 
        description, 
        color
    }
}
`

export const INSERT_CODE_COMMON_MANAGEMENT = `
mutation insertCodeCommonManagement($codeCommonManagement: CodeCommonManagementInput) {
    insertCodeCommonManagement(codeCommonManagement: $codeCommonManagement)
}
`

export const UPDATE_CODE_COMMON_MANAGEMENT = `
mutation updateCodeCommonManagement($id: ID!, $codeCommonManagement: CodeCommonManagementInput) {
    updateCodeCommonManagement(id: $id, codeCommonManagement: $codeCommonManagement)
}
`

export const DELETE_CODE_COMMON_MANAGEMENT = `
mutation deleteCodeCommonManagement($id: ID!) {
    deleteCodeCommonManagement(id: $id)
}
`

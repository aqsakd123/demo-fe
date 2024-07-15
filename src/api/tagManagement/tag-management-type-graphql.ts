export const GET_LIST_TAG_MANAGEMENTS = `
query getListTagManagement($specification: TagManagementSpecificationInput){
    getListTagManagement(specification: $specification){ 
        id, 
        name, 
        description, 
        color,
        webPart
    }
}
`

export const INSERT_TAG_MANAGEMENT = `
mutation insertTagManagement($tagManagement: TagManagementInput) {
    insertTagManagement(tagManagement: $tagManagement)
}
`

export const UPDATE_TAG_MANAGEMENT = `
mutation updateTagManagement($id: ID!, $tagManagement: TagManagementInput) {
    updateTagManagement(id: $id, tagManagement: $tagManagement)
}
`

export const DELETE_TAG_MANAGEMENT = `
mutation deleteTagManagement($id: ID!) {
    deleteTagManagement(id: $id)
}
`

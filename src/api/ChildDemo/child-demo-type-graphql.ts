export const GET_LIST_CHILD_DEMO = `
query getListChildDemo{
    getListChildDemo{
        id,
        name,
        description,
        modifiedAt
        modifiedBy
        createdAt
        createdBy
    }
}
`

export const GET_DETAIL_CHILD_DEMO = `
query getDetailChildDemo($id: ID!) {
    getDetailChildDemo(id: $id) {
        id,
        name,
        description,
        modifiedAt
        modifiedBy
        createdAt
        createdBy
    }
}
`

export const INSERT_CHILD_DEMO = `
mutation insertChildDemo($childDemo: ChildDemoInput) {
    insertChildDemo(childDemo: $childDemo)
}
`

export const UPDATE_CHILD_DEMO = `
mutation updateChildDemo($id: ID!, $childDemo: ChildDemoInput) {
    updateChildDemo(id: $id, childDemo: $childDemo)
}
`

export const DELETE_CHILD_DEMO = `
mutation deleteChildDemo($id: ID!) {
    deleteChildDemo(id: $id)
}
`

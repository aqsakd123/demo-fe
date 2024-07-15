export const GET_LIST_CODING_FEATURES = `
query getListCodingFeature($specification: CodingFeatureSpecificationInput){
    getListCodingFeature(specification: $specification){ 
        id, 
        name, 
        description, 
        color
    }
}
`

export const INSERT_CODING_FEATURE = `
mutation insertCodingFeature($codingFeature: CodingFeatureInput) {
    insertCodingFeature(codingFeature: $codingFeature)
}
`

export const UPDATE_CODING_FEATURE = `
mutation updateCodingFeature($id: ID!, $codingFeature: CodingFeatureInput) {
    updateCodingFeature(id: $id, codingFeature: $codingFeature)
}
`

export const DELETE_CODING_FEATURE = `
mutation deleteCodingFeature($id: ID!) {
    deleteCodingFeature(id: $id)
}
`

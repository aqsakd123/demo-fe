export const GET_LIST_CODING_FILES = `
query getListCodingFile($specification: CodingFileSpecificationInput){
    getListCodingFile(specification: $specification){ 
        id, 
        name, 
        description, 
        needToExport,
        filePath,
        fileName
    }
}
`

export const INSERT_CODING_FILE = `
mutation insertCodingFile($codingFile: CodingFileInput) {
    insertCodingFile(codingFile: $codingFile)
}
`

export const UPDATE_CODING_FILE = `
mutation updateCodingFile($id: ID!, $codingFile: CodingFileInput) {
    updateCodingFile(id: $id, codingFile: $codingFile)
}
`

export const DELETE_CODING_FILE = `
mutation deleteCodingFile($id: ID!) {
    deleteCodingFile(id: $id)
}
`

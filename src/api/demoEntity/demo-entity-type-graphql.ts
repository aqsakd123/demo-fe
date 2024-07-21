export const GET_LIST_DEMO_ENTITY = `
query getListDemoEntity($specification: DemoEntitySpecificationInput){
    getListDemoEntity(specification: $specification){ 
        id, 
        name, 
        description, 
    }
}
`

export const GET_DETAIL_DEMO_ENTITY = `
query getDetailDemoEntity($id: ID!) {
    getDetailDemoEntity(id: $id) {
        id, 
        name, 
        description, 
        demoMCategory {
            id
            name
        },
        demoMCategories {
            id
            name
        },
        demoMCategoryList {
            id
            name
        },
        testTextarea, 
        testCombobox, 
        testMultiCombobox, 
        testOptionalField, 
        testRadioField, 
        testNumberInput, 
        testSwitch, 
        testDateInput1, 
        testDateInput2, 
        testDateInput3, 
        testHourInput, 
        testColorInput, 
        testMultiDateInput, 
        testCheckboxGroup, 
        testCheckbox, 
        testIcon, 
        testEditor
    }
}
`

export const INSERT_DEMO_ENTITY = `
mutation insertDemoEntity($demoEntity: DemoEntityInput) {
    insertDemoEntity(demoEntity: $demoEntity)
}
`

export const UPDATE_DEMO_ENTITY = `
mutation updateDemoEntity($id: ID!, $demoEntity: DemoEntityInput) {
    updateDemoEntity(id: $id, demoEntity: $demoEntity)
}
`

export const DELETE_DEMO_ENTITY = `
mutation deleteDemoEntity($id: ID!) {
    deleteDemoEntity(id: $id)
}
`

export const GET_LIST_DEMO_ENTITY_EXAMPLE = `
query getListDemoEntityExample($specification: DemoEntityExampleSpecificationInput){
    getListDemoEntityExample(specification: $specification){
        id,
        name,
        description,
        childDemoId
        childDemo {
            id
            name
            description
            modifiedAt
            modifiedBy
            createdAt
            createdBy
        },
        childrenDemo {
            id
            name
            description
            modifiedAt
            modifiedBy
            createdAt
            createdBy
        },
        childDemoList {
            id
            name
            description
            modifiedAt
            modifiedBy
            createdAt
            createdBy
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
        testCheckboxGroup,
        testCheckbox,
        testIcon,
        testEditor,
        modifiedAt
        modifiedBy
        createdAt
        createdBy
    }
}
`

export const GET_DETAIL_DEMO_ENTITY_EXAMPLE = `
query getDetailDemoEntityExample($id: ID!) {
    getDetailDemoEntityExample(id: $id) {
        id,
        name,
        description,
        childDemoId
        childDemo {
            id
            name
            description
            modifiedAt
            modifiedBy
            createdAt
            createdBy
        },
        childrenDemo {
            id
            name
            description
            modifiedAt
            modifiedBy
            createdAt
            createdBy
        },
        childDemoList {
            id
            name
            description
            modifiedAt
            modifiedBy
            createdAt
            createdBy
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
        testCheckboxGroup,
        testCheckbox,
        testIcon,
        testEditor,
        modifiedAt
        modifiedBy
        createdAt
        createdBy
    }
}
`

export const GET_PAGED_DEMO_ENTITY_EXAMPLE = `query getPagedDemoEntityExample($specification: DemoEntityExampleSpecificationInput) {
    getPagedDemoEntityExample(specification: $specification) {
        content {
            id,
            name,
            description,
            childDemoId
            childDemo {
                id
                name
                description
                modifiedAt
                modifiedBy
                createdAt
                createdBy
            },
            childrenDemo {
                id
                name
                description
                modifiedAt
                modifiedBy
                createdAt
                createdBy
            },
            childDemoList {
                id
                name
                description
                modifiedAt
                modifiedBy
                createdAt
                createdBy
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
            testCheckboxGroup,
            testCheckbox,
            testIcon,
            testEditor,
            modifiedAt
            modifiedBy
            createdAt
            createdBy
        }
        totalElements
        totalPages
        number
    }
}`

export const INSERT_DEMO_ENTITY_EXAMPLE = `
mutation insertDemoEntityExample($demoEntityExample: DemoEntityExampleInput) {
    insertDemoEntityExample(demoEntityExample: $demoEntityExample)
}
`

export const UPDATE_DEMO_ENTITY_EXAMPLE = `
mutation updateDemoEntityExample($id: ID!, $demoEntityExample: DemoEntityExampleInput) {
    updateDemoEntityExample(id: $id, demoEntityExample: $demoEntityExample)
}
`

export const DELETE_DEMO_ENTITY_EXAMPLE = `
mutation deleteDemoEntityExample($id: ID!) {
    deleteDemoEntityExample(id: $id)
}
`

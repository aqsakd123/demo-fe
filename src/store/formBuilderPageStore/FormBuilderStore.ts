import { FormItem } from '@app/pages/FormGenerators/Utils/form-builder-types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type DialogState = 'edit' | 'add' | 'none'

export type FormBuilderState = {
  formDataList: FormItem[]
  formDialogStatus: DialogState
  formEditData?: FormItem
  isDirty: boolean
}

const initialState: FormBuilderState = {
  formDataList: [
    {
      id: '1703864252708',
      regrex: '^[a-zA-Z\\s]+$',
      maxLength: 200,
      order: 1,
      tooltip: 'Text Field. Only accept word and space character.\nMaximum 200 characters.',
      type: 'textfield',
      codeName: 'ITEM_1',
      label: 'Form Item Text 1',
      options: [],
      required: false,
    },
    {
      id: '1703864342685',
      required: true,
      tooltip: 'Combobox. Required.\n5 options',
      type: 'combobox',
      order: 2,
      codeName: 'ITEM_2',
      label: 'Form Item Combobox 1',
      options: [
        {
          value: '1',
          label: 'Option #1',
        },
        {
          value: '2',
          label: 'Option #2',
        },
        {
          value: '3',
          label: 'Option #3',
        },
        {
          value: '4',
          label: 'Option #4',
        },
        {
          value: '5',
          label: 'Option #5',
        },
      ],
    },
    {
      id: '1703864406049',
      referenceValue: '3',
      referenceCodeName: 'ITEM_2',
      maxLength: 50,
      order: 3,
      tooltip: 'Display only when Combobox 1 is Option#3\n50 maximum text',
      type: 'textarea',
      codeName: 'ITEM_3',
      label: 'Form Item TextArea',
      options: [],
      required: false,
    },
    {
      id: '1703940062662',
      apiLabelCode: 'title',
      apiValueCode: 'id',
      order: 4,
      fetchApi: 'https://jsonplaceholder.typicode.com/todos',
      tooltip: '',
      type: 'combobox',
      codeName: 'ITEM_API1',
      label: 'Test fetching api',
      options: [],
      required: false,
    },
  ],
  formDialogStatus: 'none',
  isDirty: false,
}

const formBuilderStore = createSlice({
  name: 'formBuilderStore',
  initialState: initialState as FormBuilderState,
  reducers: {
    setDataFormList: (state: FormBuilderState, action: PayloadAction<FormItem[]>) => {
      state.formDataList = action.payload
    },
    setDataFormEdit: (state: FormBuilderState, action: PayloadAction<FormItem>) => {
      state.formEditData = action.payload
    },
    setDirty: (state: FormBuilderState, action: PayloadAction<boolean>) => {
      state.isDirty = action.payload
    },
  },
})

export default formBuilderStore

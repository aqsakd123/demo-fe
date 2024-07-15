import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'
import { CodeCommonManagement } from '@app/pages/CodeGeneratorManagement/CodeCommonManagement/CodeCommonManagementList'

export type CodeCommonManagementState = {
  loadingStatus: Loading
  dataList: CodeCommonManagement[]
  dirty: boolean
  editItem?: CodeCommonManagement
  codeBlockDirty: boolean
  codeBlockEditItem?: any
}

const initialState: CodeCommonManagementState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
  codeBlockDirty: false,
}

const codeCommonManagementStore = createSlice({
  name: 'codeCommonManagement',
  initialState: initialState as CodeCommonManagementState,
  reducers: {
    setLoadingStatus: (state: CodeCommonManagementState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setCodeCommonManagementList: (
      state: CodeCommonManagementState,
      action: PayloadAction<CodeCommonManagement[]>,
    ) => {
      state.dataList = action.payload
    },
    setDirty: (state: CodeCommonManagementState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (
      state: CodeCommonManagementState,
      action: PayloadAction<CodeCommonManagement | undefined>,
    ) => {
      state.editItem = action.payload
    },
    setCodeBlockDirty: (state: CodeCommonManagementState, action: PayloadAction<boolean>) => {
      state.codeBlockDirty = action.payload
    },
    setCodeBlockEditItem: (
      state: CodeCommonManagementState,
      action: PayloadAction<any | undefined>,
    ) => {
      state.codeBlockEditItem = action.payload
    },
    clearAll: (state: CodeCommonManagementState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default codeCommonManagementStore

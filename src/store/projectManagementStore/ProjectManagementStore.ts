import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'
import { ProjectManagement } from '@app/pages/CodeGeneratorManagement/ProjectManagement/ProjectManagementList'

export type ProjectManagementState = {
  loadingStatus: Loading
  dataList: ProjectManagement[]
  dirty: boolean
  editItem?: ProjectManagement
}

const initialState: ProjectManagementState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
}

const projectManagementStore = createSlice({
  name: 'projectManagement',
  initialState: initialState as ProjectManagementState,
  reducers: {
    setLoadingStatus: (state: ProjectManagementState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setProjectManagementList: (
      state: ProjectManagementState,
      action: PayloadAction<ProjectManagement[]>,
    ) => {
      state.dataList = action.payload
    },
    setDirty: (state: ProjectManagementState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (
      state: ProjectManagementState,
      action: PayloadAction<ProjectManagement | undefined>,
    ) => {
      state.editItem = action.payload
    },
    clearAll: (state: ProjectManagementState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default projectManagementStore

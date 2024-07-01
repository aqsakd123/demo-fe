import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'

export type TaskChecklistState = {
  loadingStatus: Loading
  dataList: any[]
  dirty: boolean
  editItem?: any
  subTaskDirty: boolean
  subTaskEditItem?: any
}

const initialState: TaskChecklistState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
  subTaskDirty: false,
}

const taskChecklistStore = createSlice({
  name: 'any',
  initialState: initialState as TaskChecklistState,
  reducers: {
    setLoadingStatus: (state: TaskChecklistState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setTaskChecklistList: (state: TaskChecklistState, action: PayloadAction<any[]>) => {
      state.dataList = action.payload
    },
    setDirty: (state: TaskChecklistState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (state: TaskChecklistState, action: PayloadAction<any | undefined>) => {
      state.editItem = action.payload
    },
    setSubTaskDirty: (state: TaskChecklistState, action: PayloadAction<boolean>) => {
      state.subTaskDirty = action.payload
    },
    setSubTaskEditItem: (state: TaskChecklistState, action: PayloadAction<any | undefined>) => {
      state.subTaskEditItem = action.payload
    },
    clearAll: (state: TaskChecklistState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default taskChecklistStore

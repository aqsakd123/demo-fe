import { TagManagement } from '@app/pages/TagManagement/TagManagementList'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'

export type TagManagementState = {
  loadingStatus: Loading
  dataList: TagManagement[]
  dirty: boolean
  editItem?: TagManagement
}

const initialState: TagManagementState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
}

const tagManagementStore = createSlice({
  name: 'tagManagement',
  initialState: initialState as TagManagementState,
  reducers: {
    setLoadingStatus: (state: TagManagementState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setTagManagementList: (state: TagManagementState, action: PayloadAction<TagManagement[]>) => {
      state.dataList = action.payload
    },
    setDirty: (state: TagManagementState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (state: TagManagementState, action: PayloadAction<TagManagement | undefined>) => {
      state.editItem = action.payload
    },
    clearAll: (state: TagManagementState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default tagManagementStore

import { ChildDemo } from '@app/pages/ChildDemo/ChildDemoList'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'

export type ChildDemoState = {
  loadingStatus: Loading
  dataList: ChildDemo[]
  dirty: boolean
  editItem?: ChildDemo
}

const initialState: ChildDemoState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
}

const childDemoStore = createSlice({
  name: 'childDemo',
  initialState: initialState as ChildDemoState,
  reducers: {
    setLoadingStatus: (state: ChildDemoState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setChildDemoList: (state: ChildDemoState, action: PayloadAction<ChildDemo[]>) => {
      state.dataList = action.payload
    },
    setDirty: (state: ChildDemoState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (state: ChildDemoState, action: PayloadAction<ChildDemo | undefined>) => {
      state.editItem = action.payload
    },
    clearAll: (state: ChildDemoState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default childDemoStore

import { DemoEntity } from '@app/pages/DemoEntity/DemoEntityList'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'

export type DemoEntityState = {
  loadingStatus: Loading
  dataList: DemoEntity[]
  dirty: boolean
  editItem?: DemoEntity
}

const initialState: DemoEntityState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
}

const demoEntityStore = createSlice({
  name: 'demoEntity',
  initialState: initialState as DemoEntityState,
  reducers: {
    setLoadingStatus: (state: DemoEntityState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setDemoEntityList: (state: DemoEntityState, action: PayloadAction<DemoEntity[]>) => {
      state.dataList = action.payload
    },
    setDirty: (state: DemoEntityState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (state: DemoEntityState, action: PayloadAction<DemoEntity | undefined>) => {
      state.editItem = action.payload
    },
    clearAll: (state: DemoEntityState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default demoEntityStore

import { DemoEntityExample } from '@app/pages/DemoEntityExample/DemoEntityExampleList'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'

export type DemoEntityExampleState = {
  loadingStatus: Loading
  dataList: DemoEntityExample[]
  dirty: boolean
  editItem?: DemoEntityExample
  childDemoOptions: any[]
  childDemoListOptions: any[]
}

const initialState: DemoEntityExampleState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
  childDemoOptions: [],
  childDemoListOptions: [],
}

const demoEntityExampleStore = createSlice({
  name: 'demoEntityExample',
  initialState: initialState as DemoEntityExampleState,
  reducers: {
    setLoadingStatus: (state: DemoEntityExampleState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setDemoEntityExampleList: (
      state: DemoEntityExampleState,
      action: PayloadAction<DemoEntityExample[]>,
    ) => {
      state.dataList = action.payload
    },
    setDirty: (state: DemoEntityExampleState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (
      state: DemoEntityExampleState,
      action: PayloadAction<DemoEntityExample | undefined>,
    ) => {
      state.editItem = action.payload
    },
    setChildDemoOptions: (state: DemoEntityExampleState, action: PayloadAction<any[]>) => {
      state.childDemoOptions = action.payload
    },
    setChildDemoListOptions: (state: DemoEntityExampleState, action: PayloadAction<any[]>) => {
      state.childDemoListOptions = action.payload
    },
    clearAll: (state: DemoEntityExampleState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default demoEntityExampleStore

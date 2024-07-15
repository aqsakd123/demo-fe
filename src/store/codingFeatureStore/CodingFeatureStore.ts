import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'
import { CodingFeature } from '@app/pages/CodeGeneratorManagement/CodingFeature/CodingFeatureList'

export type CodingFeatureState = {
  loadingStatus: Loading
  dataList: CodingFeature[]
  dirty: boolean
  editItem?: CodingFeature
  tagDirty: boolean
  tagEditItem?: any
}

const initialState: CodingFeatureState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
  tagDirty: false,
}

const codingFeatureStore = createSlice({
  name: 'codingFeature',
  initialState: initialState as CodingFeatureState,
  reducers: {
    setLoadingStatus: (state: CodingFeatureState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setCodingFeatureList: (state: CodingFeatureState, action: PayloadAction<CodingFeature[]>) => {
      state.dataList = action.payload
    },
    setDirty: (state: CodingFeatureState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (state: CodingFeatureState, action: PayloadAction<CodingFeature | undefined>) => {
      state.editItem = action.payload
    },
    setTagDirty: (state: CodingFeatureState, action: PayloadAction<boolean>) => {
      state.tagDirty = action.payload
    },
    setTagEditItem: (state: CodingFeatureState, action: PayloadAction<any | undefined>) => {
      state.tagEditItem = action.payload
    },
    clearAll: (state: CodingFeatureState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default codingFeatureStore

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Loading } from '../commonStore/CommonStore'
import { CodingFile } from '@app/pages/CodeGeneratorManagement/CodingFile/CodingFileList'

export type CodingFileState = {
  loadingStatus: Loading
  dataList: CodingFile[]
  dirty: boolean
  editItem?: CodingFile
  tagDirty: boolean
  tagEditItem?: any
}

const initialState: CodingFileState = {
  loadingStatus: 'NotLoad',
  dataList: [],
  dirty: false,
  tagDirty: false,
}

const codingFileStore = createSlice({
  name: 'codingFile',
  initialState: initialState as CodingFileState,
  reducers: {
    setLoadingStatus: (state: CodingFileState, action: PayloadAction<Loading>) => {
      state.loadingStatus = action.payload
    },
    setCodingFileList: (state: CodingFileState, action: PayloadAction<CodingFile[]>) => {
      state.dataList = action.payload
    },
    setDirty: (state: CodingFileState, action: PayloadAction<boolean>) => {
      state.dirty = action.payload
    },
    setEditItem: (state: CodingFileState, action: PayloadAction<CodingFile | undefined>) => {
      state.editItem = action.payload
    },
    setTagDirty: (state: CodingFileState, action: PayloadAction<boolean>) => {
      state.tagDirty = action.payload
    },
    setTagEditItem: (state: CodingFileState, action: PayloadAction<any | undefined>) => {
      state.tagEditItem = action.payload
    },
    clearAll: (state: CodingFileState) => {
      state.loadingStatus = 'NotLoad'
      state.dirty = false
      state.editItem = undefined
      state.dataList = []
    },
  },
})

export default codingFileStore

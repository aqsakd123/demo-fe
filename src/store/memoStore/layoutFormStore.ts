import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ValuedField {
  field: string
  value: string
}

export interface ObjectSheetRecord {
  name: string
  dataType: string
  required: boolean
  useList: boolean
  searchLogic: string
  specialLogic: string
  max: number
  // Backend
  unique: string
  relation: string
  relationEntity: string
  // Frontend
  componentName: string
  label: string
  options: string
  optionsType: string
}

export interface ObjectSheet {
  entityName: string
  isExisted: boolean
  records: ObjectSheetRecord[]
}

export interface LayoutForm {
  commonInfoFields: ValuedField[]
  mainEntity: ObjectSheet
  relationSheets: ObjectSheet[]
}

export interface FileData {
  id: number
  fileName: string
  fileLink: string
  exportable: boolean
  content: string
  prompt: string
  code?: string
}

export interface HistoryItem {
  layoutForm: LayoutForm
  fileData: FileData[]
  uploadAt: string
}

export interface LayoutFormStoreItem {
  id: string // uuid
  name: string
  projectName: string
  history: HistoryItem[]
}

interface LayoutFormState {
  items: LayoutFormStoreItem[]
}

const initialState: LayoutFormState = {
  items: [],
}

export const layoutFormSlice = createSlice({
  name: 'layoutForm',
  initialState,
  reducers: {
    addLayoutForm: (state, action: PayloadAction<LayoutFormStoreItem>) => {
      state.items.push(action.payload)
    },
    deleteLayoutForm: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    addHistoryItem: (state, action: PayloadAction<{ id: string; historyItem: HistoryItem }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.history.push(action.payload.historyItem)
      }
    },
    updateHistoryItem: (
      state,
      action: PayloadAction<{ id: string; historyIndex: number; historyItem: HistoryItem }>,
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.history[action.payload.historyIndex] = action.payload.historyItem
      }
    },
    deleteHistoryItem: (state, action: PayloadAction<{ id: string; historyIndex: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.history.splice(action.payload.historyIndex, 1)
      }
    },
  },
})

export const {
  addLayoutForm,
  deleteLayoutForm,
  addHistoryItem,
  updateHistoryItem,
  deleteHistoryItem,
} = layoutFormSlice.actions

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Tag = {
  id: number
  value: string
  label: string
  backgroundColor?: string
}

export type Memo = {
  id: number
  title: string
  content: string
  tags: number[]
}

export interface MemoState {
  tagList: Tag[]
  memoList: Memo[]
}

const initialState: MemoState = {
  tagList: [
    { id: 1, value: 'work', label: 'Work', backgroundColor: 'red' },
    { id: 2, value: 'personal', label: 'Personal', backgroundColor: 'yellow' },
    { id: 3, value: 'urgent', label: 'Urgent' },
  ],
  memoList: [
    { id: 1, title: 'Meeting Notes', content: 'Discuss project roadmap', tags: [1] },
    { id: 2, title: 'Grocery List', content: 'Milk, Bread, Eggs', tags: [2] },
  ],
}

export const memoStore = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    addMemo: (state, action: PayloadAction<Omit<Memo, 'id'>>) => {
      state.memoList.push({ id: Date.now(), ...action.payload })
    },
    updateMemo: (state, action: PayloadAction<Memo>) => {
      state.memoList = state.memoList.map((memo) =>
        memo.id === action.payload.id ? action.payload : memo,
      )
    },
    deleteMemo: (state, action: PayloadAction<number>) => {
      state.memoList = state.memoList.filter((memo) => memo.id !== action.payload)
    },
    addTag: (state, action: PayloadAction<Omit<Tag, 'id'>>) => {
      state.tagList.push({ id: Date.now(), ...action.payload })
    },
    editTag: (state, action: PayloadAction<Tag>) => {
      state.tagList = state.tagList.map((tag) =>
        tag.id === action.payload.id ? action.payload : tag,
      )
    },
    removeTag: (state, action: PayloadAction<number>) => {
      state.tagList = state.tagList.filter((tag) => tag.id !== action.payload)
      state.memoList.forEach((memo) => {
        memo.tags = memo.tags.filter((tagId) => tagId !== action.payload)
      })
    },
  },
})

export const { addMemo, updateMemo, deleteMemo, addTag, editTag, removeTag } = memoStore.actions

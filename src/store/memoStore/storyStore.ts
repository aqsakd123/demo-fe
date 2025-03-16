import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { chapters, storyCategory } from './data-mock'
import { newStories } from './new-stories'

export type Terminology = {
  name?: string
  value?: string
  description: string
  type: 'power' | 'faction' | 'definition'
  // used to replace from original story
  replacementName?: string
  replacementDescription?: string
  isAdd?: boolean
}

export type Character = {
  name: string
  description: string
  firstIntroduced: number
  currentStatus: 'dead' | 'alive'
  // used to replace from original story
  replacementName?: string
  replacementDescription?: string
}

export type StorySetting = {
  label: string
  title?: string
  value: string
  worldBuilding: string
  terminology: Terminology[]
  characters: Character[]
}

export type Chapter = {
  id: string
  type: string
  chapterIndex: number
  title: string
  summaryDetail: string
  fullChapter?: string
  originalStoryId?: string
  disable?: boolean
  terminology?: Terminology[]
  characters?: Character[]
}

type NewStory = {
  id: string
  name: string
  worldBuilding: string
  chapters: Chapter[]
}

interface StoryState {
  storySetting: StorySetting[]
  originalStory: Chapter[]
  newStories: NewStory[]
}

const initialState: StoryState = {
  storySetting: storyCategory,
  originalStory: chapters,
  // @ts-ignore
  newStories: newStories,
}

export const storyStore = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addStorySetting: (state, action: PayloadAction<StorySetting>) => {
      state.storySetting.push(action.payload)
    },
    updateStorySetting: (state, action: PayloadAction<StorySetting>) => {
      const index = state.storySetting.findIndex((s) => s.value === action.payload.value)
      if (index !== -1) {
        state.storySetting[index] = action.payload
      }
    },
    deleteStorySetting: (state, action: PayloadAction<string>) => {
      state.storySetting = state.storySetting.filter((s) => s.value !== action.payload)
    },
    addOriginalStory: (state, action: PayloadAction<Chapter>) => {
      state.originalStory.push(action.payload)
    },
    updateOriginalStory: (state, action: PayloadAction<Chapter>) => {
      const index = state.originalStory.findIndex((s) => s.id === action.payload.id)
      if (index !== -1) {
        state.originalStory[index] = action.payload
      }
    },
    deleteOriginalStory: (state, action: PayloadAction<string>) => {
      state.originalStory = state.originalStory.filter((s) => s.id !== action.payload)
    },
    // addNewStory: (state, action: PayloadAction<Chapter>) => {
    //   state.newStories.push(action.payload)
    // },
    // addBulkNewStory: (state, action: PayloadAction<Chapter[]>) => {
    //   state.newStories = state.newStories.concat(action.payload)
    // },
    updateNewStory: (state, action: PayloadAction<NewStory>) => {
      const index = state.newStories.findIndex((s) => s.id === action.payload.id)
      if (index !== -1) {
        state.newStories[index] = action.payload
      }
    },
    deleteNewStory: (state, action: PayloadAction<string>) => {
      state.newStories = state.newStories.filter((s) => s.id !== action.payload)
    },
  },
})

export default storyStore.reducer

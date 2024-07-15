import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum TYPE_VALUE {
  TEXT,
  NUMBER,
  BOOLEAN,
  SELECT,
}
interface Common {
  id: string
  name: string
  content: string
}

type FunctionalParam = {
  id: string
  name: string
  defaultValue?: string
  type?: TYPE_VALUE
  selectOption?: string[]
}

interface Functional {
  id: string
  name: string
  description?: string
  params: FunctionalParam[]
}

interface ProjectState {
  codeCommonList: Common[]
  functionalList: Functional[]
  currentProjectId?: string
  currentLanguage?: string
  currentLanguageList?: any
}

const initialState: ProjectState = {
  codeCommonList: [
    { id: 'uuid_type_2_code_comment', name: 'Hello Worldly!!!', content: 'uuid1 content code' },
    { id: 'uuid_type_3_code_comment', name: 'Hello Worldly 2222', content: 'uuid1 content code' },
  ],
  functionalList: [
    {
      id: '08p3u81u32480fjdhjsdhjhdsf',
      name: 'F1',
      params: [
        {
          id: '123456789',
          name: 'name001',
          defaultValue: 'xxx',
          type: TYPE_VALUE.TEXT,
        },
      ],
    },
    { id: '18p3u81u32480fjdhjsdhjhdsf', name: 'F2', params: [] },
    { id: '28p3u81u32480fjdhjsdhjhdsf', name: 'F3', params: [] },
    { id: '38p3u81u32480fjdhjsdhjhdsf', name: 'F4', params: [] },
  ],
  currentProjectId: undefined,
  currentLanguage: 'java',
  currentLanguageList: {
    frontend: undefined,
    backend: undefined,
  },
}

const projectStore = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeCodeCommonList: (state, action: PayloadAction<Common[]>) => {
      state.codeCommonList = action.payload
    },
    changeFunctionalList: (state, action: PayloadAction<Functional[]>) => {
      state.functionalList = action.payload
    },
    changeCurrentProjectId: (state, action: PayloadAction<string | undefined>) => {
      state.currentProjectId = action.payload
    },
    changeCurrentLanguageList: (
      state,
      action: PayloadAction<{ frontend?: string; backend?: string }>,
    ) => {
      state.currentLanguageList = action.payload
    },
  },
})

export default projectStore

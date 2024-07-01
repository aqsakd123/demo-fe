import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Loading = 'NotLoad' | 'Loaded' | 'Loading' | 'Error'
export type DialogState = 'add' | 'edit' | 'none'

export type CommonState = {
  isLoading?: boolean
  isSidebar?: boolean
  messageAlert?: MessageAlertProp
  userInfo: any
  darkMode: boolean
}

export type MessageAlertProp = {
  info?: string
  isShowAlert?: boolean
  messageId?: string
  type?: string
}

const initialState = {
  isLoading: false,
  isSidebar: false,
  messageAlert: {
    info: '',
    isShowAlert: false,
    messageId: '',
    type: 'success',
  },
  userInfo: {},
  darkMode: false,
}

const commonStore = createSlice({
  name: 'common',
  initialState: initialState as CommonState,
  reducers: {
    setLoading: (state: CommonState, action) => {
      state.isLoading = action.payload
    },
    setSidebar: (state: CommonState, action) => {
      state.isSidebar = action.payload
    },
    setMessageAlert: (state: CommonState, action: PayloadAction<MessageAlertProp>) => {
      state.messageAlert = {
        ...state.messageAlert,
        ...action.payload,
      }
    },
    setUserInfo: (state: CommonState, action) => {
      state.userInfo = action.payload
    },
  },
})

export default commonStore

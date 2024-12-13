import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Loading = 'NotLoad' | 'Loaded' | 'Loading' | 'Error'
export type DialogState = 'add' | 'edit' | 'view' | 'none'

interface ColorShades {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface ColorTokens {
  grey: ColorShades
  primary: ColorShades
  greenAccent: ColorShades
  redAccent: ColorShades
  blueAccent: ColorShades
}

export type CommonState = {
  isLoading?: boolean
  isSidebar?: boolean
  messageAlert?: MessageAlertProp
  userInfo: any
  darkMode: boolean
  colorTokens: ColorTokens
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
  darkMode: true,
  messageAlert: {
    info: '',
    isShowAlert: false,
    messageId: '',
    type: 'success',
  },
  userInfo: {},
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
    setColorTokens: (state: CommonState, action: PayloadAction<ColorTokens>) => {
      state.colorTokens = action.payload
    },
    setDarkmode: (state: CommonState, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
    },
  },
})

export default commonStore

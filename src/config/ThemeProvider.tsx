import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as StyledThemeProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles'
import SnackbarProvider from './SnackbarProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import commonStore from '@app/store/commonStore/CommonStore'

export const BreakPointsXS = 0
export const BreakPointsSM = 760
export const BreakPointsMD = 960
export const BreakPointsLG = 1280
export const BreakPointsXL = 1920

export const SelectedColor = 'rgb(33, 150, 243)'

export const baseColorLight = {
  primary: '#111827',
  secondary: '#202020',
  tertiary: '#404040',
  fieldLabel: '#404040de',
}

export const baseColorDark = {
  primary: '#FFFFFF',
  secondary: '#121212',
  tertiary: '#080808',
  fieldLabel: '#FFFFFFde',
}

export const baseGroundColor = (darkMode?: boolean) => {
  return darkMode ? baseColorLight : baseColorDark
}

export const tokens = (darkMode: boolean) => ({
  ...(darkMode
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#ededf0',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#030015',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0',
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#ededf0',
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
      }),
})

export const themeSettings = (mode: 'dark' | 'light'): ThemeOptions => {
  const colors = tokens(mode === 'dark')
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,

      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'dark' ? colors.redAccent[900] : undefined,
            color: colors.grey[100],
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.Mui-checked': {
              color: colors.blueAccent[400],
            },
            '&.Mui-checked + .MuiSwitch-track': {
              backgroundColor: colors.blueAccent[400],
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 'bold',
            height: 'fit-content',
          },
          outlined: {
            boxShadow: `inset 0 0 2px ${colors.blueAccent[500]}`,
            color: colors.grey[100],
            '&:hover': {
              color: colors.blueAccent[500],
            },
          },
          text: {
            color: colors.grey[100],
            '&:hover': {
              borderColor: colors.blueAccent[200],
            },
          },
          contained: {
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            '&:hover': {
              backgroundColor: colors.blueAccent[500],
            },
          },
        },
      },
    },
  }
}

type Props = {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const dispatch = useDispatch()

  const { darkMode } = useSelector((state: RootState) => state.commonStore)
  const muiTheme = createTheme(themeSettings(darkMode ? 'dark' : 'light'))

  useEffect(() => {
    dispatch(commonStore.actions.setColorTokens(tokens(darkMode)))
  }, [darkMode])

  return (
    <StyledThemeProvider theme={muiTheme}>
      <CssBaseline />
      <SnackbarProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
      </SnackbarProvider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider

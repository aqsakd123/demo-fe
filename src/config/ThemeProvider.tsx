import { CssBaseline, createTheme } from '@mui/material'
// import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import { ThemeProvider as StyledThemeProvider } from '@mui/material/styles'
import SnackbarProvider from './SnackbarProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export const BreakPointsXS = 0
export const BreakPointsSM = 760
export const BreakPointsMD = 960
export const BreakPointsLG = 1280
export const BreakPointsXL = 1920

export const SelectedColor = 'rgb(33, 150, 243)'

export const baseFontColors = {
  primary: '#111827',
  secondary: '#202020',
  tertiary: '#404040',
  fieldLabel: '#404040de',
}

export const CustomTheme = {
  palette: {
    primary: {
      main: '#111827',
    },
    secondary: {
      main: '#0d2b45',
    },
    error: {
      main: '#f58484',
    },
    action: {
      disabled: '#7a7a7a',
      disabledBackground: '#e5e5e5',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: baseFontColors.primary,
      secondary: baseFontColors.secondary,
      tertiary: baseFontColors.tertiary,
      fieldLabel: baseFontColors.fieldLabel,
    },
  },
  typography: {
    button: {
      fontSize: '0.813rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: 'yellow',
        },
        outlined: {
          color: '#111827',
          '&:hover': {
            color: '#0d2b45',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#111827',
            color: 'yellow',
            '&:hover': {
              backgroundColor: '#0d2b45',
            },
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: BreakPointsXS,
      sm: BreakPointsSM,
      md: BreakPointsMD,
      lg: BreakPointsLG,
      xl: BreakPointsXL,
    },
  },
}
const muiTheme = createTheme(CustomTheme)
export type CustomThemeType = typeof CustomTheme

type Props = {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
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

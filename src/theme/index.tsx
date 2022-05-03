import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material'

export * from './useTheme'

interface TextColor {
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  text8: string
}
interface BgColor {
  bg1: string
  bg2: string
  bg3: string
  bg4: string
}

declare module '@mui/material/styles' {
  interface Theme {
    textColor: TextColor
    bgColor: BgColor
  }
}

export const theme = {
  textColor: {
    text1: '#9482FE',
    text2: '#F0F0F3',
    text3: '#3A88F5',
    text4: '#244B6F',
    text5: '#595656',
    text6: '#2E4A6B',
    text7: '#9881FF',
    text8: '#9D80FF',
  },
  bgColor: {
    bg1: '#1A2E47',
    bg2: '#3A88F5',
    bg3: '#D7E5FC',
    bg4: '#9482FE',
  },
}

export const override: any = {
  MuiTypography: {
    styleOverrides: {
      root: {
        // fontFamily: 'Osaka',
        fontFamily: 'Apple SD Gothic Neo',
        lineHeight: 1.52,
      },
      h2: {
        fontWeight: 500,
        fontFamily: 'Apple SD Gothic Neo',
      },
      h3: {
        fontWeight: 500,
        fontFamily: 'Apple SD Gothic Neo',
      },
      h4: {
        fontWeight: 500,
        fontFamily: 'Apple SD Gothic Neo',
      },
      body1: {
        fontSize: 16,
        fontFamily: 'Osaka',
        color: theme.textColor.text7,
      },
    },
  },
}

export default createTheme({
  ...theme,
  typography: {
    fontFamily: ['Apple SD Gothic Neo', 'Osaka', 'PingFang SC'].join(','),
  },
  components: {
    ...override,
  },
})

export function ThemeProvider({ children, theme }: any) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}

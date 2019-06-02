import { normalize } from 'styled-normalize'
import { css, createGlobalStyle } from 'styled-components'

type TColors = {
  [key: string]: string
}

type TShadows = {
  [key: string]: string
}

type TFontSizes = string[]

type TRadius = string

type TBreakpoints = string[]

interface TTheme {
  colors: TColors
  shadows: TShadows
  fontSizes: TFontSizes
  radius: TRadius
  breakpoints: TBreakpoints
}

type TFactoryFunc = (
  literals: TemplateStringsArray,
  ...args: string[]
) => string

type TMedia = {
  [key: string]: TFactoryFunc
}

const colors: TColors = {
  white: '#FFFFFF',
  primary: '#2196F3',
  pageBackground: '#F3F7FA',
  darkText: '#4A4A4A',
  grayText: '#8B9497',
  buyButton: '#FF6D00',
  hoveredBuyButton: '#FF8124',
  border: '#D2D5D6',
  primaryBorder: '#64B5F5',
  currencyHover: '#F2FCFF',
  ticketDivider: '#ECEFF1'
}

const shadows: TShadows = {
  card: '0 1px 4px rgba(91, 137, 164, .25)',
  hoveredCard: '0 5px 25px rgba(91, 137, 164, .1)',
  buyButton: '0 1px 0 0 #D64D08, 0 2px 1px rgba(0, 0, 0, .1)',
  hoveredBuyButton: '0 1px 0 0 #F7661D, 0 1px 5px rgba(0, 0, 0, .25)'
}

const fontSizes: TFontSizes = ['10px', '11px', '12px', '13px', '16px', '32px']

const radius: TRadius = '5px'

const breakpoints: TBreakpoints = ['414px', '560px', '728px', '818px']

const theme: TTheme = { colors, shadows, fontSizes, radius, breakpoints }

export default theme

const [
  phoneBreakpoint,
  tabletBreakpoint,
  desktopBreakpoint,
  wideBreakpoint
] = breakpoints

const mediaFactory = (width: string): TFactoryFunc => (literals, ...args) =>
  css`
    @media (max-width: ${width}) {
      ${css(literals, ...args)};
    }
  `.join('')

const mediaMinFactory = (width: string): TFactoryFunc => (literals, ...args) =>
  css`
    @media (min-width: ${width}) {
      ${css(literals, ...args)};
    }
  `.join('')

export const media: TMedia = {
  phone: mediaFactory(phoneBreakpoint),
  tablet: mediaFactory(tabletBreakpoint),
  desktop: mediaFactory(desktopBreakpoint),
  wide: mediaFactory(wideBreakpoint),
  phoneMin: mediaMinFactory(phoneBreakpoint),
  tabletMin: mediaMinFactory(tabletBreakpoint),
  desktopMin: mediaMinFactory(desktopBreakpoint),
  wideMin: mediaMinFactory(wideBreakpoint)
}

const global = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;

    background-color: ${colors.pageBackground};
  }
`

export const GlobalStyles = createGlobalStyle`
  ${global};
  ${normalize};
`

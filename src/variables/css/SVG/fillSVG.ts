export type FillDarkKey = 'white'
export type FillLightKey = 'black'

export type ColorsConfig = {
  dark: Record<FillDarkKey, string>
  light: Record<FillLightKey, string>
}

export const FillConfig: ColorsConfig = {
  dark: {
    white: 'dark:fill-white',
  },
  light: {
    black: 'fill-black',
  },
}

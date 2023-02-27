export type FillColor = 'white' | 'black'

export const fillConfig: Record<FillColor, string> = {
  white: 'fill-white dark:fill-black',
  black: 'fill-black dark:fill-white',
}

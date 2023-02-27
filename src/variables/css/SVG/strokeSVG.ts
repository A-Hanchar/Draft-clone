export type StrokeType = 'none' | 'black' | 'white'

export const strokeConfig: Record<StrokeType, string> = {
  white: 'stroke-white dark:stroke-black',
  black: 'stroke-black dark:stroke-white',
  none: 'stroke-none',
}

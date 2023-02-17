export type ColorTextKeys = 'darkGray' | 'blue' | 'red' | 'green' | 'neutral' | 'darkWhite'
export type ColorBackgroundKeys = 'white' | 'neutral/75' | 'transparent' | 'lightGray' | 'darkSlate' | 'darkSlateDrawer'

type ColorsConfig = {
  bg: Record<ColorBackgroundKeys, string>
  text: Record<ColorTextKeys, string>
}

export const colorsConfig: ColorsConfig = {
  bg: {
    white: 'bg-white',
    'neutral/75': 'bg-neutral-900/75',
    transparent: 'bg-transparent',
    lightGray: 'bg-gray-100',
    darkSlate: 'dark:bg-slate-800',
    darkSlateDrawer: 'dark:bg-slate-700',
  },
  text: {
    darkGray: 'text-gray-800',
    blue: 'text-blue-500',
    red: 'text-red-500',
    green: 'text-green-500',
    neutral: 'text-neutral-400',
    darkWhite: 'dark:text-white',
  },
}

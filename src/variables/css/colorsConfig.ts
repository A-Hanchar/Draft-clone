export type ColorTextKeys = 'darkGray' | 'blue' | 'red' | 'green' | 'neutral'
export type ColorBackgroundKeys = 'white' | 'neutral/75' | 'transparent' | 'lightGray'

type ColorsConfig = {
  bg: Record<ColorBackgroundKeys, string>
  text: Record<ColorTextKeys, string>
}

export const colorsConfig: ColorsConfig = {
  bg: {
    white: 'bg-white dark:bg-slate-700',
    'neutral/75': 'bg-neutral-900/75',
    transparent: 'bg-transparent',
    lightGray: 'bg-gray-100 dark:bg-slate-800',
  },
  text: {
    darkGray: 'text-gray-800 dark:text-gray-100',
    blue: 'text-blue-500',
    red: 'text-red-500',
    green: 'text-green-500',
    neutral: 'text-neutral-400 dark:text-gray-100',
  },
}

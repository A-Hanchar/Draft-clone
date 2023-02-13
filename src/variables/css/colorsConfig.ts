export type ColorTextKeys = 'darkGray' | 'blue' | 'red' | 'green' | 'neutral'
export type ColorBackgroundKeys = 'white' | 'neutral/75' | 'transparent' | 'lightGray'

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
  },
  text: {
    darkGray: 'text-gray-800',
    blue: 'text-blue-500',
    red: 'text-red-500',
    green: 'text-green-500',
    neutral: 'text-neutral-400',
  },
}

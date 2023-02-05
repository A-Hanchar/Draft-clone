export type ColorKeys = 'red' | 'green' | 'blue' | 'lightGray' | 'darkGray'

type ColorsConfig = {
  bg: Record<ColorKeys, string>
  text: Record<ColorKeys, string>
}

export const colorsConfig: ColorsConfig = {
  bg: {
    red: 'bg-red-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    lightGray: 'bg-gray-100',
    darkGray: 'bg-gray-800',
  },
  text: {
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    lightGray: 'text-gray-100',
    darkGray: 'text-gray-800',
  },
}

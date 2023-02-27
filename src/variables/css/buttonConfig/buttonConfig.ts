import { type ButtonConfigType } from './types'

export const buttonConfig: ButtonConfigType = {
  buttonType: {
    primary: {
      color: 'text-white',
      bgColor: 'bg-blue-500',
      outline: 'focus:outline-none focus:shadow-outline',
      hover: 'hover:bg-blue-700',
    },
    alert: {
      color: 'text-white',
      bgColor: 'bg-red-500',
      outline: 'focus:outline-none focus:shadow-outline',
      hover: 'hover:bg-red-700',
    },
    success: {
      color: 'text-white',
      bgColor: 'bg-green-500',
      outline: 'focus:outline-none focus:shadow-outline',
      hover: 'hover:bg-green-700',
    },
    close: {
      wrap: {
        position: {
          absolute: 'absolute',
          relative: 'relative',
        },
        classes: 'bg-transparent border-none',
      },
      after:
        'after:absolute after:top-[calc(100% / 2)] after:left-0 after:w-full after:h-1.5 after:bg-current after:-rotate-45',
      before:
        'before:absolute before:top-[calc(100% / 2)] before:left-0 before:w-full before:h-1.5 before:bg-current before:rotate-45',
    },
  },
  color: {
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    lightGray: 'text-gray-100',
    darkGray: 'text-gray-800 dark:text-gray-100',
  },
  getClassByColorType({ colorType }) {
    const { bgColor, color, outline, hover } = this.buttonType[colorType]

    return `${bgColor} ${color} ${outline} ${hover}`
  },
  getClassesForCloseButton({ position, color }) {
    const { wrap, after, before } = this.buttonType.close

    return `${wrap.position[position]} ${wrap.classes} ${after} ${before} ${this.color[color]}`
  },
}

import { type ButtonConfigType } from './types'

export const buttonConfig: ButtonConfigType = {
  commonStyles: 'cursor-pointer',
  buttonType: {
    primary: {
      color: 'text-white',
      bgColor: 'bg-blue-500 hover:bg-blue-700',
      outline: 'focus:outline-none focus:shadow-outline',
    },
    alert: {
      color: 'text-white',
      bgColor: 'bg-red-500 hover:bg-red-700',
      outline: 'focus:outline-none focus:shadow-outline',
    },
    success: {
      color: 'text-white',
      bgColor: 'bg-green-500 hover:bg-green-700',
      outline: 'focus:outline-none focus:shadow-outline',
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
      color: {
        red: 'text-red-500',
      },
    },
  },
  getClassByColorType({ colorType }) {
    const { bgColor, color, outline } = this.buttonType[colorType]

    return `${bgColor} ${color} ${outline}`
  },
  getClassesForCloseButton({ position, color }) {
    const { wrap, color: closeColor, after, before } = this.buttonType.close

    return `${wrap.position[position]} ${wrap.classes} ${after} ${before} ${closeColor[color]}`
  },
}

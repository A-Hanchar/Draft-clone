import { Button } from 'components/Button'

import { type CloseButtonProps } from './types'

export const CloseButton = ({ onclick }: CloseButtonProps) => {
  const buttonClasses = 'cursor-pointer absolute top-1.5 right-1.5 bg-transparent border-none w-6 h-6'
  const afterClasses =
    'after:absolute after:top-[calc(100% / 2)] after:left-0 after:w-full after:h-1.5 after:bg-red-700 after:-rotate-45'
  const beforeClasses =
    'before:absolute before:top-[calc(100% / 2)] before:left-0 before:w-full before:h-1.5 before:bg-red-700 before:rotate-45'

  return Button({
    classname: `${buttonClasses} ${beforeClasses} ${afterClasses}`,
    onclick,
  })
}

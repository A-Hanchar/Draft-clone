import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type ButtonProps } from './types'
import { useGetButtonClasses } from './useGetButtonClasses'

export const Button = ({
  children,
  classname,
  onclick,
  type = 'button',
  disabled = false,
  textTransform,
  rounded,
  weight,
  ...restProps
}: ButtonProps) => {
  const buttonClasses = useGetButtonClasses({ classname, disabled, rounded, textTransform, weight, ...restProps })

  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: buttonClasses,
    children,
  })

  button.type = type
  button.disabled = disabled

  const handleClick = (event: Event) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}

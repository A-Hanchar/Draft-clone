import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type ButtonProps } from './types'

export const Button = ({
  children,
  classname = '',
  color,
  onclick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: `cursor-pointer ${classname}`,
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

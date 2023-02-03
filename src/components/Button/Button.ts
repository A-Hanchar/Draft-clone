import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type ButtonProps } from './types'

export const Button = ({
  children,
  classname = '',
  color,
  textcontent = '',
  onclick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: `cursor-pointer bg-${color} ${classname}`,
    children,
  })

  button.type = type
  button.disabled = disabled
  button.textContent = textcontent

  const handleClick = (event: Event) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}

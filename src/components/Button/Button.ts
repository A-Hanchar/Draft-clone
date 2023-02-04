import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { buttonClassesByColorType } from 'variables/css'

import { type ButtonProps } from './types'

export const Button = ({
  children,
  classname = '',
  color,
  onclick,
  type = 'button',
  disabled = false,
  textTransform = 'normal-case',
}: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: `p-3.5 rounded cursor-pointer focus:outline-none focus:shadow-outline ${classname} ${textTransform}`,
    children,
  })

  if (color) {
    addClassnameToElement({ element: button, classname: buttonClassesByColorType[color] })
  }

  button.type = type
  button.disabled = disabled

  const handleClick = (event: Event) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}

import { createElementWithClassNameAndAppendNode } from 'helpers'
import { buttonClassesByColorType } from 'variables/css'

import { type ButtonProps } from './types'

export const Button = ({
  children,
  classname = '',
  color = 'primary',
  onclick,
  type = 'button',
  disabled = false,
  innerText = '',
}: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: `cursor-pointer ${buttonClassesByColorType[color]} ${classname}`,
    children,
  })

  button.type = type
  button.disabled = disabled
  button.innerText = innerText

  const handleClick = (event: Event) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}

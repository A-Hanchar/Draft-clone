import './styles.css'
import { createElementWithClassName } from 'helpers'

import { type ButtonProps } from './types'

export const Button = ({ children, classname, onclick, type = 'button', disabled = false }: ButtonProps) => {
  const button = createElementWithClassName({ tagName: 'button', classname })

  children && button.append(children)

  button.type = type
  button.disabled = disabled

  const handleClick = (event: Event) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}

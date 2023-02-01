import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'

import { type ButtonProps } from './types'

export const Button = ({ children, classname, onclick, type = 'button', disabled = false }: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({ tagName: 'button', classname: 'cursor-pointer', children })

  if (typeof classname === 'string') {
    addClassnameToElement({ element: button, classname })
  } else if (Array.isArray(classname)) {
    classname.forEach((className) => {
      addClassnameToElement({ element: button, classname: className })
    })
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

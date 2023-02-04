import { createElementWithClassNameAndAppendNode, createElementWithClassName } from 'helpers'

import { type InputProps } from './types'

export const Input = ({ input, label }: InputProps) => {
  const inputElement = createElementWithClassName({ tagName: 'input', classname: input.className })
  inputElement.id = input.id
  inputElement.placeholder = input.placeholder

  if (label) {
    const labelElement = createElementWithClassNameAndAppendNode({
      tagName: 'label',
      classname: label.className,
      children: [label.innerText, inputElement],
    })
    return labelElement
  }

  return inputElement
}

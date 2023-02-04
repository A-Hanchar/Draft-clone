import { createElementWithClassNameAndAppendNode, createElementWithClassName } from 'helpers'

import { type InputProps } from './types'

export const Input = ({ className, id, type, placeholder = '', ...rest }: InputProps) => {
  const inputElement = createElementWithClassName({ tagName: 'input', classname: className })

  if (id) {
    inputElement.id = id
  }

  inputElement.placeholder = placeholder

  if (rest.labelInnerText) {
    const labelElement = createElementWithClassNameAndAppendNode({
      tagName: 'label',
      classname: rest.labelClassName,
      children: [rest.labelInnerText, inputElement],
    })
    return labelElement
  }

  return inputElement
}

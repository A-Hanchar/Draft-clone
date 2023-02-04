import { createElementWithClassNameAndAppendNode, createElementWithClassName } from 'helpers'

import { type InputProps } from './types'

export const Input = ({ className, id, type, placeholder = '', ...restProps }: InputProps) => {
  const inputElement = createElementWithClassName({ tagName: 'input', classname: className })

  if (id) {
    inputElement.id = id
  }

  inputElement.placeholder = placeholder

  if (restProps.labelInnerText) {
    const { labelInnerText, labelClassName } = restProps

    const labelElement = createElementWithClassNameAndAppendNode({
      tagName: 'label',
      classname: labelClassName,
      children: [labelInnerText, inputElement],
    })

    return labelElement
  }

  return inputElement
}

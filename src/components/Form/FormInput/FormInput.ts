import { createElementWithClassName, getTruthyClasses } from 'helpers'
import { colorsConfig, fontWeights } from 'variables/css'

import { type FormInputCurrentProps } from './types'

export const FormInput = ({
  classname,
  id,
  placeholder,
  inputType = 'text',
  color = 'darkGray',
  weight = 400,
}: FormInputCurrentProps) => {
  const input = createElementWithClassName({
    tagName: 'input',
    classname: getTruthyClasses([
      'shadow',
      'appearance-none',
      'border',
      'rounded',
      'focus:outline-none',
      'focus:shadow-outline',
      'py-2',
      'px-3',
      'leading-tight',
      fontWeights[weight],
      colorsConfig.text[color],
      colorsConfig.bg.white,
      classname,
    ]),
  })

  if (id) input.id = id
  if (placeholder) input.placeholder = placeholder

  input.type = inputType

  return input
}

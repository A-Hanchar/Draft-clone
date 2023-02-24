import { createElementWithClassName, getTruthyClasses } from 'helpers'
import { colorsConfig, fontWeights, resizeConfig } from 'variables/css'

import { type FormTextareaProps } from './types'

export const FormTextarea = ({
  classname,
  weight,
  color = 'darkGray',
  defaultValue,
  disabled,
  maxLength,
  minLength,
  placeholder,
  resize,
  rows,
  value,
}: FormTextareaProps) => {
  const textarea = createElementWithClassName({
    tagName: 'textarea',
    classname: getTruthyClasses([
      classname,
      colorsConfig.text[color],
      weight && fontWeights[weight],
      resize && resizeConfig[resize],
    ]),
  })

  if (defaultValue) textarea.defaultValue = defaultValue
  if (disabled) textarea.disabled = disabled
  if (maxLength) textarea.maxLength = maxLength
  if (minLength) textarea.minLength = minLength
  if (placeholder) textarea.placeholder = placeholder
  if (rows) textarea.rows = rows
  if (value) textarea.value = value

  return textarea
}
